---
title: How To Set Up A Multi-version Odoo Development Environment Locally
type: article
status: imported
author: Hiep Dinh
source: innomize-cms
source_id: 25
slug: how-to-set-up-a-multi-version-odoo-development-environment-locally
url: "https://innomizetech.com/blog/how-to-set-up-a-multi-version-odoo-development-environment-locally"
created: 2023-06-20
published: 2020-01-03
locale: en
excerpt: Configuring the local development environment to run multiple versions of Odoo that need different versions of Python dependencies
---

# How To Set Up A Multi-version Odoo Development Environment Locally

Sometimes, we need to develop some projects with different Odoo versions. So we need to make sure that the project’s dependencies will not interfere with the dependencies of other projects that can be running a different version of Odoo or will use different third-party add-on modules, which need different versions of Python dependencies.

This article will step by step, set up a multi-version Odoo development environment locally for [Ubuntu](https://ubuntu.com/) (see more at [Odoo 12 Development Cookbook](https://www.packtpub.com/application-development/odoo-12-development-cookbook-third-edition)).

#### Requirements

Dependencies need to be installed for this article:

*   [Python3](https://www.python.org/downloads/)
*   [Virtualenv](https://virtualenv.pypa.io/en/latest/installation/)
*   [Git version control](https://git-scm.com/)
*   [Docker](https://docs.docker.com/get-started/) to run PostgreSQL
*   [Other dependencies](https://www.odoo.com/documentation/13.0/setup/install.html) such as psycopg, wkhtmltopdf, libpq-dev, libldap2-dev, libsasl2-dev, libxslt1-dev,…

#### Setup Databases

Docker-compose file for PostgreSQL with default database is odoo\_13.

```yaml
version: "3.7"
services:
  odoo-db:
    image: postgres:10.11
    container_name: odoo_postgres_10_11
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_DB=odoo_13
      - POSTGRES_PASSWORD=odoo
      - POSTGRES_USER=odoo
      - PGDATA=/var/lib/postgresql/data/odoo
    volumes:
      - odoo-db-data:/var/lib/postgresql/data/odoo

volumes:
  odoo-db-data:
```

Run docker-compose up to create a container. Then connecting to DB and create new database odoo\_12

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1687256627/production/odoo_multiple_versions_db_7d62260f7d.webp) 

#### Workspace structure

Create a workspace with structure.

```sh
workspace
    ├── odoo-12
    │   ├── bin       // Include various helper executable shell scripts
    │   ├── filestore // Use as a file store
    │   ├── local     // Save your instance-specific add-ons (module)
    │   ├── logs      // Store the server log files
    │   └── src       // Contains the clone of Odoo itself
    └── odoo-13
        ├── bin
        ├── filestore
        ├── local
        ├── logs
        └── src
```

#### Setup Odoo version 13 development environment

Navigating Commandline to workspace/odoo-13 and run.

```sh
virtualenv -p python3 env
git clone https://github.com/odoo/odoo.git src/odoo
env/bin/pip3 install -r src/odoo/requirements.txt
```

Save the following shell script as bin/odoo :

```sh
 #!/bin/sh
ROOT=$(dirname $0)/..
PYTHON=$ROOT/env/bin/python3
ODOO=$ROOT/src/odoo/odoo-bin
$PYTHON $ODOO -c $ROOT/local.cfg "$@"
exit $?
```

Make the script executable:

```sh
chmod +x bin/odoo
```

Create a local.cfg configuration file for your instance:

```cfg
\[options\]
addons\_path = currentDir/src/odoo/odoo/addons, currentDir/src/odoo/addons, currentDir/local
data\_dir = currentDir/filestore
db\_host = localhost
db\_user = odoo
db\_password = odoo
db\_name = odoo\_13
```

Start server:

```sh
bin/odoo -i base
```

Now can you able to login to Odoo

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1687256725/production/odoo_login_screen_ab508efbf7.webp) 

#### Setup Odoo version 12 development environment

Every step is the same as version 13. We only update route odoo-13 to odoo-12, db\_name = odoo\_13 to db\_name = odoo\_12 in local.cfg and git clone source from brand odoo 12.

```sh
git clone https://www.github.com/odoo/odoo --depth 1 --branch 12.0 --single-branch
```

#### Conclusion

By isolating dependencies for every Odoo version. We will prevent conflict when developing Odoo modules for every version locally.

I hope this article will be helpful.