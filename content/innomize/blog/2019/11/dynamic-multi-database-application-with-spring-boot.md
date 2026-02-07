---
title: Dynamic Multi Database Application With Spring Boot
type: article
status: imported
author: Hiep Dinh
source: innomize-cms
source_id: 13
slug: dynamic-multi-database-application-with-spring-boot
url: "https://innomizetech.com/blog/dynamic-multi-database-application-with-spring-boot"
created: 2023-06-20
published: 2019-11-11
locale: en
excerpt: A way to configure and manage multiple data sources for a multi-tenant application (or SaaS) in Spring and JPA
---

# Dynamic Multi Database Application With Spring Boot

Basically, you will need to connect to data sources based on the current context such as Client, Customer. Sometimes, this is for security reasons, performance, scalability, or isolation. It is usually applied in the Multi-tenant SaaS database (see [more](https://docs.microsoft.com/en-us/azure/sql-database/saas-tenancy-app-design-patterns)). In this article, we will provide steps to configure dynamic multiple data sources in Spring Boot and JPA.

## The Maven Dependencies

Overall, creating a DataSource implementation programmatically is straightforward.  
Here is the list of Maven dependencies.

```xml

	org.springframework.boot
	spring-boot-starter

	org.springframework.boot
	spring-boot-starter-web

	org.springframework.boot
	spring-boot-starter-data-jpa

	mysql
	mysql-connector-java

```

To support **MySQL**, our classpath must include the **MySQL** database connector dependency.  
We use starter-web to demonstrate usage via an HTTP request.

## Datasource Router

AbstractRoutingDatasource requires information to know which actual DataSource to route to. This information is typically referred to as Context.  

In our example, we’ll use the notion of a DBTypeEnum as our context with the following implementation:

```java
public enum DBTypeEnum {
    MAIN, CLIENT_A, CLIENT_B;
}
```
Another common use case involves using the notion of an Environment to define the context. In such a scenario, the context could be an enum containing PRODUCTION, DEVELOPMENT, and TESTING.  

The context holder implementation is a container that stores the current context as a ThreadLocal reference.

```java
public class DBContextHolder {
    private static final ThreadLocal contextHolder = new ThreadLocal<>();

    public static void setCurrentDb(DBTypeEnum dbType) {
        contextHolder.set(dbType);
    }

    public static DBTypeEnum getCurrentDb() {
        return contextHolder.get();
    }

    public static void clear() {
        contextHolder.remove();
    }
}
```

Finally, we define our ClientDataSourceRouter to extend the Spring AbstractRoutingDataSource.

```java
public class MultiRoutingDataSource extends AbstractRoutingDataSource {
    @Override
    protected Object determineCurrentLookupKey() {
        return DBContextHolder.getCurrentDb();
    }
}
```
## Database Connection Settings with application.properties file

```plaintext
app.datasource.main.jdbc-url=jdbc:mysql://localhost:3306/multi_main?useSSL=false
app.datasource.main.username=root
app.datasource.main.password=P@ssw0rd#

app.datasource.clienta.jdbc-url=jdbc:mysql://localhost:3306/multi_client_a?useSSL=false
app.datasource.clienta.username=root
app.datasource.clienta.password=P@ssw0rd#

app.datasource.clientb.jdbc-url=jdbc:mysql://localhost:3306/multi_client_b?useSSL=false
app.datasource.clientb.username=root
app.datasource.clientb.password=P@ssw0rd#
```

## Configuration

```java
@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(
        basePackages = "com.example.multidb",
        entityManagerFactoryRef = "multiEntityManager",
        transactionManagerRef = "multiTransactionManager"
)
public class PersistenceConfiguration {
    private final String PACKAGE_SCAN = "com.example.multidb";

    @Primary
    @Bean(name = "mainDataSource")
    @ConfigurationProperties("app.datasource.main")
    public DataSource mainDataSource() {
        return DataSourceBuilder.create().type(HikariDataSource.class).build();
    }

    @Bean(name = "clientADataSource")
    @ConfigurationProperties("app.datasource.clienta")
    public DataSource clientADataSource() {
        return DataSourceBuilder.create().type(HikariDataSource.class).build();
    }

    @Bean(name = "clientBDataSource")
    @ConfigurationProperties("app.datasource.clientb")
    public DataSource clientBDataSource() {
        return DataSourceBuilder.create().type(HikariDataSource.class).build();
    }

    @Bean(name = "multiRoutingDataSource")
    public DataSource multiRoutingDataSource() {
        Map targetDataSources = new HashMap<>();
        targetDataSources.put(DBTypeEnum.MAIN, mainDataSource());
        targetDataSources.put(DBTypeEnum.CLIENT_A, clientADataSource());
        targetDataSources.put(DBTypeEnum.CLIENT_B, clientBDataSource());
        MultiRoutingDataSource multiRoutingDataSource = new MultiRoutingDataSource();
        multiRoutingDataSource.setDefaultTargetDataSource(mainDataSource());
        multiRoutingDataSource.setTargetDataSources(targetDataSources);

        return multiRoutingDataSource;
    }

    @Bean(name = "multiEntityManager")
    public LocalContainerEntityManagerFactoryBean multiEntityManager() {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(multiRoutingDataSource());
        em.setPackagesToScan(PACKAGE_SCAN);
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        em.setJpaVendorAdapter(vendorAdapter);
        em.setJpaProperties(hibernateProperties());

        return em;
    }

    @Bean(name = "multiTransactionManager")
    public PlatformTransactionManager multiTransactionManager() {
        JpaTransactionManager transactionManager
                = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(
                multiEntityManager().getObject());

        return transactionManager;
    }

    @Primary
    @Bean(name = "dbSessionFactory")
    public LocalSessionFactoryBean dbSessionFactory() {
        LocalSessionFactoryBean sessionFactoryBean = new LocalSessionFactoryBean();
        sessionFactoryBean.setDataSource(multiRoutingDataSource());
        sessionFactoryBean.setPackagesToScan(PACKAGE_SCAN);
        sessionFactoryBean.setHibernateProperties(hibernateProperties());
        return sessionFactoryBean;
    }

    private Properties hibernateProperties() {
        Properties properties = new Properties();
        properties.put("hibernate.show_sql", true);
        properties.put("hibernate.format_sql", true);

        return properties;
    }
}
```

In this example, the `mainDataSource` is the default data source and we can use it to retrieve client/customer information (i.e. for the authentication process).

## Testing the dynamic multiple data sources

**Creating a JPA Entity**
```java
@Entity
public class Post {
    @Id
    private long id;
    private String name;
	// standard constructors / setters / getters / toString
}
```

**A Simple Repository Layer**

```java
@Repository
public interface PostRepository extends JpaRepository {}
```

**Testing**  

Lastly, we need to check that our programmatically-configured DataSource is actually working. We can easily accomplish this with a Rest API. Note: When using our AbstractRoutingDataSource, we first set the context(via AOP, authentication process,…) and then perform our operation.

```java
        @RestController
        public class PostController {
            @Autowired
            private PostRepository postRepository;
        
        	// test -> main DB
        	// test?client=client-a -> Client A DB
        	// test?client=client-b -> Client B DB
            @GetMapping("/test")
            @ResponseBody
            public Iterable getTest(@RequestParam(defaultValue = "main") String client) {
                switch (client) {
                    case "client-a":
                        DBContextHolder.setCurrentDb(DBTypeEnum.CLIENT_A);
                        break;
                    case "client-b":
                        DBContextHolder.setCurrentDb(DBTypeEnum.CLIENT_B);
                        break;
                }
        
                return postRepository.findAll();
            }
        
            @GetMapping("/init-data")
            @ResponseBody
            public String initialData() {
                String name = "main - " + (new Random()).nextInt();
                postRepository.save(new Post("Main DB"));
        
                DBContextHolder.setCurrentDb(DBTypeEnum.CLIENT_A);
                postRepository.save(new Post("Client A DB"));
        
                DBContextHolder.setCurrentDb(DBTypeEnum.CLIENT_B);
                postRepository.save(new Post("Client B DB"));
        
                return "Success!";
            }
        }
```

## Conclusion

When dealing with only one data source and Spring Boot, data source configuration is simple. Spring Boot can provide a lot of autoconfiguration.  

However, if you need to connect to multiple data sources with Spring Boot, additional configuration is needed.  

You need to provide configuration data to Spring Boot, customized for each data source.