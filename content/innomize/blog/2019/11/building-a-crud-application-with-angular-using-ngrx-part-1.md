---
title: Building A CRUD Application With Angular Using Ngrx – Part 1
type: article
status: imported
author: Tuan Nguyen
source: innomize-cms
source_id: 15
slug: building-a-crud-application-with-angular-using-ngrx-part-1
url: "https://innomizetech.com/blog/building-a-crud-application-with-angular-using-ngrx-part-1"
created: 2023-06-20
published: 2019-11-12
locale: en
excerpt: If you are using Monorepo for your project, NX is a Monorepo tool that will help you to organize and provide features to develop web or mobile applications. This article will help you understand how t
---

# Building A CRUD Application With Angular Using Ngrx – Part 1

In this guide, we just focus on how to build a CRUD application with Angular (version 8) that has already installed the [Ngrx](https://ngrx.io/), not on setting up an Angular application or installing the Ngrx library. You can follow the following guides to do those tasks:

*   Set up an Angular application: [https://codeburst.io/how-to-build-an-angular-app-with-angular-cli-in-a-couple-of-minutes-43089d3ab272](https://codeburst.io/how-to-build-an-angular-app-with-angular-cli-in-a-couple-of-minutes-43089d3ab272)
*   Install the Ngrx library: [https://ngrx.io/guide/store/install](https://ngrx.io/guide/store/install)

If you have no idea what is Ngrx, I recommend you to read [this](https://ngrx.io/docs) to explore more about it. And if you have a basic knowledge of [Redux](https://redux.js.org/), I think it will be easy to approach this library.

In this part, we will learn how to define actions, reducers, and selectors and build a page to display all items that are selected from the store using the [Ngrx](https://ngrx.io/).

* * *

In almost any application that we work with, we all encounter operations such as retrieving data, rendering it as a table view, create/update or delete a row on that view. And this data which is stored on the server is dealt with by the usage of HTTP requests (GET, POST, etc).

The first thing we need to do in here is where the data is stored that we will get through an HTTP API request. Because this article does not focus on this, I will use a fake backend server for mocking. There are different ways to use a fake back-end server are:

*   Use Angular In-Memory-Web-API
*   Create a local JSON file and use it
*   Or hard-code the data, and return this data.

But I have another easy way, say big thanks to [https://getsandbox.com](https://getsandbox.com/). Just provide some rows of code, we already have a RESTful API for mock or testing. I have created a mock RESTful API on [https://getsandbox.com](https://getsandbox.com/) for CRUD on the Entity object as below:

**Fake RESTful APIs: (CRUD)**  
**GET**:    https://entity.getsandbox.com/entities/     (**Get all**)  
**GET**:    https://entity.getsandbox.com/entities/{id} (**Get one**)  
**POST**:   https://entity.getsandbox.com/entities/     (**Create**)  
**PUT**:    https://entity.getsandbox.com/entities/{id} (**Update**)  
**DELETE**: https://entity.getsandbox.com/entities/{id} (**Delete**)

Ok, we have done on prerequisite items. Next, we’ll go together to define actions, reducers, and selectors to fetch Entity objects from the fake server I have created before and store it in the Ngrx store. If you have developed with a React Redux application before, all fundamental principles of Redux (action, reducer, selector, etc) will be similar to the Ngrx.

First, we will define a class that describes all properties of the Entity object we will deal with:

```typescript
/**
 * Define a class that describes all properties of the Entity object 
 */
export class Entity {
  id: number;
  name: string;
  code: string;
}
```
Let’s define some actions for loading entities as:

```typescript
import { createAction, props } from "@ngrx/store";

import { Entity } from "../entity";

export enum EntityActionTypes {
  LoadEntities = "[Entity] Load Entities",
  LoadEntitiesSuccess = "[Entity] Load Entities Success",
  LoadEntitiesFail = "[Entity] Load Entities Fail"
}

export const loadEntities = createAction(EntityActionTypes.LoadEntities);

export const loadEntitiesSuccess = createAction(
  EntityActionTypes.LoadEntitiesSuccess,
  props()
);

export const loadEntitiesFail = createAction(
  EntityActionTypes.LoadEntitiesFail,
  props()
);

export const fromEntityActions = {
  loadEntities,
  loadEntitiesFail,
  loadEntitiesSuccess
};

```
Next, we’ll define the Entity’s reducer. Here, we have to define an initial state and specify how the state is changed for each action sent to the store.

```typescript
import { createReducer, on, Action } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { fromEntityActions } from "./actions";
import { Entity } from "../entity";

export const ENTITY_FEATURE_KEY = "entity";

export interface State extends EntityState {
  loaded: boolean;
  error?: Error | any;
}

export const adapter: EntityAdapter = createEntityAdapter({
  // In this case this would be optional since primary key is id
  selectId: item => item.id
});

export interface EntityPartialState {
  readonly [ENTITY_FEATURE_KEY]: State;
}

export const initialState: State = adapter.getInitialState({
  // Additional entity state properties
  loaded: false,
  error: null
});

const _reducer = createReducer(
  initialState,
  on(fromEntityActions.loadEntitiesSuccess, (state, { data }) => {
    return adapter.addAll(data, {
      ...state,
      loaded: true
    });
  }),
  on(fromEntityActions.loadEntitiesFail, (state, { error }) => {
    return {
      ...state,
      error
    };
  }),
  on(fromEntityActions.loadEntitySuccess, (state, { id, item }) => {
    return adapter.addOne(item, state);
  }),
  on(fromEntityActions.loadEntityFail, (state, { error }) => {
    return {
      ...state,
      error
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}
```

Continue implementing selectors:

```typescript
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { State, adapter, ENTITY_FEATURE_KEY } from "./reducer";

// Lookup the 'Entity' feature state managed by NgRx
const getEntityState = createFeatureSelector(ENTITY_FEATURE_KEY);

// get the selectors
const { selectIds, selectAll, selectTotal } = adapter.getSelectors();

// select the array of Entity ids
export const selectEntityIds = createSelector(
  getEntityState,
  selectIds
);

// select the array of Entitys
export const selectAllEntities = createSelector(
  getEntityState,
  selectAll
);

// select the total Entity count
export const selectEntityCount = createSelector(
  getEntityState,
  selectTotal
);

// select entity loaded flag
export const selectEntityLoaded = createSelector(
  getEntityState,
  state => state.loaded
);

// select entity error
export const selectError = createSelector(
  getEntityState,
  state => state.error
);
```

Create a service file to fetch data from the server:

```typescript
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EntityService {
  constructor(public http: HttpClient) {}

  getEntities() {
    return this.http.get(`https://entity.getsandbox.com/entities`);
  }
}
```

To read data from the server, we need to create a side effect to make an HTTP request to the server and store data in the store through Ngrx actions. With React, [Saga](https://redux-saga.js.org/) can handle side effects for us. And the Ngrx also has provided the **Effect** concept that is the same as the Saga. As the Ngrx documentation: “Effects are an RxJS powered side effect model for [Store](https://ngrx.io/guide/store). Effects use streams to provide [new sources](https://martinfowler.com/eaaDev/EventSourcing.html) of actions to reduce state based on external interactions such as **network requests**, web socket messages, and time-based events.” So that we will use it for reading Entity data from the server.

```typescript
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import { fromEntityActions } from "./actions";
import { EntityService } from "../entity/sevices/entity.service";

@Injectable()
export class EntityEffects {
  loadEntities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEntityActions.loadEntities),
      switchMap(() =>
        this.entityService.getEntities().pipe(
          map((res: any) =>
            fromEntityActions.loadEntitiesSuccess({
              data: res.data
            })
          ),
          catchError(error =>
            of(
              fromEntityActions.loadEntitiesFail({
                error
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private entityService: EntityService
  ) {}
}
```
Finally, create an Angular page (with route “/entities”) to display a list of the entity that are fetched from the server. For easy to navigate entities page, we create a link for quick navigation in app.component.html:

```html
Go to Entities

```

In entities.page.ts, the store will dispatch loadEntities action and the effect will be triggered to fetch data from the server and store data in the store. Since the data is loaded to the store, we only get data from the store and display it.

```typescript
import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { selectAllEntities } from "../../../store/selectors";
import { fromEntityActions } from "../../../store/actions";

@Component({
  selector: "entities-page",
  templateUrl: "./entities.page.html"
})
export class EntitiesPage implements OnInit {
  title = "Entities Page";

  entities$ = this.store.pipe(select(selectAllEntities));

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fromEntityActions.loadEntities());
  }
}
```

The entity template HTML file:

```html
# {{title}}

  
    Entity Id: {{entity.id}} | Name: {{entity.name}} | Code: {{entity.code}}
  

```
Note: Ensure that you have already imported CommonModule to use the async pipe.

Gives the result:

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689157215/production/screenshot_1_8ee64f2637.webp) 

The operation for reading Entity data from the server has been completed. But you will see the entities page display an empty page before rendering a list of Entity objects. This is the cause of waiting from the server for reading data and it should be better for the user’s experience if a spinner display instead of. That is a good suggestion since I know Angular [Resolve](https://angular.io/api/router/Resolve). Resolve will wait for the data to be resolved before the page is finally navigated.

So I will define the resolver for the entities page as below:

```typescript
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, take } from "rxjs/operators";

import { fromEntityActions } from "../../store/actions";
import { EntityPartialState } from "../../store/reducer";
import { selectEntityLoaded } from "../../store/selectors";

@Injectable()
export class EntitiesResolver implements Resolve {
  constructor(private store: Store) {}

  resolve(): Observable {
    const loaded$ = this.store.pipe(select(selectEntityLoaded));

    return loaded$.pipe(
      filter(loaded => {
        if (loaded === false) {
          this.store.dispatch(fromEntityActions.loadEntities());
        }

        return loaded;
      }),
      take(1)
    );
  }
}
   
```
As above code, the entities page only is activated if the loaded flag is true. Also, I have added a filter operator to dispatch loadEntities action if the loaded flag is false. So the application only makes an HTTP request only the loaded flag is false, this reduces significantly backend traffic during the application navigation.

Update the entities.page.ts to comment or remove the following code:

```typescript
// this.store.dispatch(fromEntityActions.loadEntities());
```

Continue to add the resolve to the route configuration:

```typescript
export const entityRoutes: Routes = [
  {
    path: "",
    component: EntitiesPage,
    resolve: {
      entities: EntitiesResolve
    }
  }
];
```

Enjoy the result:

[CRUD Angular NGRX (Part 1) – CodeSandboxCodeSandbox is an online editor tailored for web applications.codesandbox.io](https://codesandbox.io/embed/crud-angular-ngrx-part-1-0k2ke?fontsize=14&source=post_page-----725af50f1548----------------------)

SUMMARY
=======

Coming to the end of this guide, let us have a quick recap of what we did.

*   Use [https://getsandbox.com/](https://getsandbox.com/) to quickly create a fake server for mocking and testing.
*   Use **createAction**, **createReducer,** and **createFeatureSelector** for creating actions, reducer, selectors.
*   Use **Ngrx Effect** to handle side effects to make an HTTP call for retrieving data from the server.
*   Use **Angular Resolver** to ensure that data has already loaded before the page is navigated.

I hope this tutorial will be helpful to you 😀