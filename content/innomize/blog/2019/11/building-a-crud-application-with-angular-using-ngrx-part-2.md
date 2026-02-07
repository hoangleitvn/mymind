---
title: Building A Crud Application With Angular Using Ngrx – Part 2
type: article
status: imported
author: Tuan Nguyen
source: innomize-cms
source_id: 17
slug: building-a-crud-application-with-angular-using-ngrx-part-2
url: "https://innomizetech.com/blog/building-a-crud-application-with-angular-using-ngrx-part-2"
created: 2023-06-20
published: 2019-11-15
locale: en
excerpt: In this part, we will continue to build CRUD applications on creating, updating, and deleting an entity using Ngrx
---

# Building A Crud Application With Angular Using Ngrx – Part 2

In the [previous part](https://blog.innomizetech.com/2019/11/12/building-a-crud-application-with-angular-using-ngrx-part-1/), I showed how to build a sample mockup API for CRUD application as well as build a sample list page. In this part, we will continue to build CRUD application on creating, updating and deleting an entity using Ngrx.

Before continuing, I want to introduce to you a special thing is “**Optimistic UI**”.

What is O**ptimistic UI?**
==========================

> Optimistic UI is a pattern that you can use to simulate the results of a mutation and update the UI even before receiving a response from the server. Once the response is received from the server, the optimistic result is thrown away and replaced with the actual result ~ [Apollo](https://www.apollographql.com/docs/react/performance/optimistic-ui/).

Let’s remember the previous approach for handling update operation (I call this approach is **Synchronous UI**):

*   The end-user click update action.
*   The end-user click update action.
*   Make an HTTP request for the update operation.
*   Displays a spinner (or loading image) for waiting for the success response from the server.
*   After the server responses successfully, we continue to refresh data on UI to reflect with the updated result for consistency. Otherwise failed, display an error message.

And if we apply the **Optimistic UI** approach:

*   The end-user click update action.
*   Make an HTTP request for updating operation and the UI value is updated immediately assuming the response will be successful.
*   After the server responses successfully, we do not anything. Otherwise failed, revert the UI value as the previous state.

As you see two above approaches, the **Synchronous UI** approach needs a step that shows a spinner for waiting for the server’s response and the UI just is updated after the server is responded. In most cases, there is no reason to wait for a successful response when we assume that all requests are expected to be successful. Like that, the **Optimistic UI** approach brings to the end-user a faster user experience, more smooth and stable.

Now, we will dive to implement CRUD application with optimistic interaction.

* * *

In part 1, we have built the CRUD application to read Entity from the server and display it using Ngrx. Before we implement the update Entity feature, we need update code for some files as preparation.

Update the _entity.service.ts_ file as:
```yaml
    import { HttpClient } from "@angular/common/http";
    import { Injectable } from "@angular/core";
    import { Entity } from "../models/entity";
    
    @Injectable({
      providedIn: "root"
    })
    export class EntityService {
      private baseURL: string;
    
      constructor(public http: HttpClient) {
        this.baseURL = "https://entity.getsandbox.com";
      }
    
      getEntities() {
        return this.http.get(`${this.baseURL}/entities`);
      }
    
      getEntity(id: number) {
        return this.http.get(`${this.baseURL}/entities/${id}`);
      }
    
      createEntity(entity: Entity) {
        return this.http.post(`${this.baseURL}/entities`, entity);
      }
    
      updateEntity(id: number, update: Entity) {
        return this.http.put(`${this.baseURL}/entities/${id}`, update);
      }
    
      deleteEntity(id: number) {
        return this.http.delete(`${this.baseURL}/entities/${id}`);
      }
    }
```
Update _entities.page.html_ to add some action links:
```yaml
    # {{title}}

    
    
      
        Entity Id: {{entity.id}} | Name: {{entity.name}} | Code: {{entity.code}} |
        Edit |
        [Delete](javascript:void(0))
      

    

```
Update Entity
=============

First, we update _entity.actions.ts_ file to add some actions as:
```yaml
    import { createAction, props } from "@ngrx/store";
    
    import { Entity } from "../entity";
    
    export enum EntityActionTypes {
      LoadEntities = "[Entity] Load Entities",
      LoadEntitiesSuccess = "[Entity] Load Entities Success",
      LoadEntitiesFail = "[Entity] Load Entities Fail",
      LoadEntity = "[Entity] Load Entity",
      LoadEntitySuccess = "[Entity] Load Entity Success",
      LoadEntityFail = "[Entity] Load Entity Fail",
      UpdateEntity = "[Entity] Update Entity",
      UpdateEntitySuccess = "[Entity] Update Entity Success",
      UpdateEntityFail = "[Entity] Update Entity Fail"
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
    
    export const loadEntity = createAction(
      EntityActionTypes.LoadEntity,
      props()
    );
    
    export const loadEntitySuccess = createAction(
      EntityActionTypes.LoadEntitySuccess,
      props()
    );
    
    export const loadEntityFail = createAction(
      EntityActionTypes.LoadEntityFail,
      props()
    );
    
    export const updateEntity = createAction(
      EntityActionTypes.UpdateEntity,
      props()
    );
    
    export const updateEntitySuccess = createAction(
      EntityActionTypes.UpdateEntitySuccess,
      props()
    );
    
    export const updateEntityFail = createAction(
      EntityActionTypes.UpdateEntityFail,
      props()
    );
    
    export const fromEntityActions = {
      loadEntities,
      loadEntitiesFail,
      loadEntitiesSuccess,
      loadEntity,
      loadEntityFail,
      loadEntitySuccess,
      updateEntity,
      updateEntitySuccess,
      updateEntityFail
    };
```
Next, update the _entity.reducer.ts_ file as:
```yaml
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
      on(fromEntityActions.loadEntitySuccess, (state, { entity }) => {
        return adapter.addOne(entity, state);
      }),
      on(fromEntityActions.loadEntityFail, (state, { error }) => {
        return {
          ...state,
          error
        };
      }),
      on(fromEntityActions.updateEntity, (state, { update }) => {
        return adapter.updateOne({ id: update.id, changes: update }, state);
      }),
      on(fromEntityActions.updateEntityFail, (state, { error }) => {
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
Update the _entity.effects.ts_ file as:
```yaml
    import { Injectable } from "@angular/core";
    import { Actions, createEffect, ofType } from "@ngrx/effects";
    import { of } from "rxjs";
    import { map, switchMap, catchError } from "rxjs/operators";
    
    import { fromEntityActions } from "./actions";
    import { EntityService } from "../entity/sevices/entity.service";
    import { undo } from "ngrx-undo";
    
    @Injectable()
    export class EntityEffects {
      loadEntities$ = createEffect(() =>
        this.actions$.pipe(
          ofType(fromEntityActions.loadEntities),
          switchMap(() =>
            this.entityService.getEntities().pipe(
              map((res: any) => {
                return fromEntityActions.loadEntitiesSuccess({
                  data: res.data
                });
              }),
              catchError(error => {
                return of(
                  fromEntityActions.loadEntitiesFail({
                    error
                  })
                );
              })
            )
          )
        )
      );
    
      loadEntity$ = createEffect(() =>
        this.actions$.pipe(
          ofType(fromEntityActions.loadEntity),
          switchMap(({ id }) =>
            this.entityService.getEntity(id).pipe(
              map((res: any) => {
                return fromEntityActions.loadEntitySuccess({
                  entity: res.data
                });
              }),
              catchError(error => {
                return of(
                  fromEntityActions.loadEntityFail({
                    error
                  })
                );
              })
            )
          )
        )
      );
    
      updateEntity$ = createEffect(() =>
        this.actions$.pipe(
          ofType(fromEntityActions.updateEntity),
          switchMap(action =>
            this.entityService.updateEntity(action.update.id, action.update).pipe(
              map((res: any) => {
                return fromEntityActions.updateEntitySuccess({
                  entity: res.data
                });
              }),
              catchError(error => {
                return of(
                  fromEntityActions.updateEntityFail({
                    error
                  }),
                  undo(action)
                );
              })
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
And update the _entity.selectors.ts_ file as:
```yaml
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
    
    // select the Entity by Id
    export const selectEntity = createSelector(
      getEntityState,
      (state: State, prop: { id: number }) => state.entities[prop.id]
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
As you can see above the action file, we define an additional action is “Load Entity” for reading Entity detail from the server or the available store and display it for the user to edit. If you click edit on List of Entities page, just load data from the store that is loaded before. In case the user pastes the editing Entity page URL direct to the browser’s address, an HTTP request will be called to retrieving Entity detail instead of.

In the reducer file, you will see the “**updateEntity**” action will update immediately the state reflects with the updated entity even the server does not respond yet. And we need an action to revert the store to the previous state for case unsuccessful response. I used [**ngrx-undo**](https://github.com/brechtbilliet/ngrx-undo) to handle this case, the [**ngrx-undo**](https://github.com/brechtbilliet/ngrx-undo) provides a wrapper function to revert a specified action with the simple configuration, you can see I have used this library in the entity.effects.ts file for error handling section. To install this library you can refer to this [link](https://github.com/brechtbilliet/ngrx-undo).

Ok, we will develop a page for Entity editing as below:
```yaml
    import { Component, OnInit } from "@angular/core";
    import { Router, ActivatedRoute } from "@angular/router";
    import { FormBuilder, FormGroup } from "@angular/forms";
    import { Store } from "@ngrx/store";
    
    import { fromEntityActions } from "../../../store/actions";
    
    import { Entity } from "../../models/entity";
    
    @Component({
      selector: "entity-page",
      templateUrl: "./entity.page.html"
    })
    export class EntityPage implements OnInit {
      public entityForm: FormGroup;
      public isEdit: boolean;
    
      constructor(
        protected store: Store,
        protected route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
      ) {}
    
      ngOnInit(): void {
        const entity = this.route.snapshot.data["entity"];
    
        this.isEdit = entity ? true : false;
        this.initForm(entity || {});
      }
    
      save(): void {
        const update = {
          id: this.entityForm.value.id,
          name: this.entityForm.value.name,
          code: this.entityForm.value.code
        };
    
        if (this.isEdit) {
          this.store.dispatch(fromEntityActions.updateEntity({ update }));
        } else {
          // Otherwise add the entity as new
        }
    
        this.router.navigate(["entities"]);
      }
    
      private initForm(entity: Entity) {
        this.entityForm = this.formBuilder.group({
          id: [entity.id],
          name: [entity.name],
          code: [entity.code]
        });
      }
    }

_entity.page.html_

    # Entity page

    
      
        ID: 
        
      

      

      
        Name: 
        
      

      

      
        Code: 
        
      

      

      
        Save
      

    

the _entity.resolver.ts_

    import { Injectable } from "@angular/core";
    import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
    import { Store, select } from "@ngrx/store";
    import { Observable } from "rxjs";
    import { filter, take } from "rxjs/operators";
    
    import { fromEntityActions } from "../../store/actions";
    import { EntityPartialState } from "../../store/reducer";
    import { selectEntity } from "../../store/selectors";
    import { Entity } from "../models/entity";
    
    @Injectable()
    export class EntityResolver implements Resolve {
      constructor(private store: Store) {}
    
      resolve(route: ActivatedRouteSnapshot): Observable {
        const entity$ = this.store.pipe(
          select(selectEntity, { id: route.params.id })
        );
    
        return entity$.pipe(
          filter(entity => {
            if (!entity) {
              this.store.dispatch(
                fromEntityActions.loadEntity({ id: route.params.id })
              );
            }
    
            return !!entity;
          }),
          take(1)
        );
      }
    }
```
Finally, don’t forget to define the route for Entity editing page:
```yaml
    {
        path: "edit/:id",
        component: EntityPage,
        resolve: {
            entity: EntityResolver
        }
    }
```
Gives the result as:

![](https://i2.wp.com/miro.medium.com/max/793/1*RFpOiO63rE0PklEwx7X99Q.png?w=640&ssl=1)

Entities page

![](https://i0.wp.com/miro.medium.com/max/793/1*DVVfHR3qa_e-bJp4t05gEg.png?w=640&ssl=1)

Entity editing page

Create an Entity
================

Now to create the Entity in the server, we need to perform HTTP POST operation and pass the data that needs to be inserted. We will take a “**createEntity**” action for that.
```yaml
_entity.create.action.ts_

    export const createEntity = createAction(
      EntityActionTypes.CreateEntity,
      props()
    );
    
    export const createEntitySuccess = createAction(
      EntityActionTypes.CreateEntitySuccess,
      props()
    );
    
    export const createEntityFail = createAction(
      EntityActionTypes.CreateEntityFail,
      props()
    );
```
Update reducer and effect files to add some code as below:
```yaml
_entity.create.reducer.ts_

    on(fromEntityActions.createEntity, (state, action) => {
      return adapter.addOne(action.new, state);
    }),
    on(fromEntityActions.createEntityFail, (state, { error }) => {
      return {
        ...state,
        error
      };
    })

_entity.create.effect.ts_

    createEntity$ = createEffect(() =>
        this.actions$.pipe(
          ofType(fromEntityActions.createEntity),
          switchMap(action =>
            this.entityService.createEntity(action.new).pipe(
              map((res: any) => {
                return fromEntityActions.createEntitySuccess({
                  entity: res.data
                });
              }),
              catchError(error => {
                return of(
                  fromEntityActions.createEntityFail({
                    error
                  }),
                  undo(action)
                );
              })
            )
          )
        )
      );
```
And we can reuse the Entity editing page for creation operation, update code the _entity.page.ts_ file as below:
```yaml
    import { Component, OnInit } from "@angular/core";
    import { Router, ActivatedRoute } from "@angular/router";
    import { FormBuilder, FormGroup } from "@angular/forms";
    import { Store } from "@ngrx/store";
    
    import { fromEntityActions } from "../../../store/actions";
    
    import { Entity } from "../../models/entity";
    
    @Component({
      selector: "entity-page",
      templateUrl: "./entity.page.html"
    })
    export class EntityPage implements OnInit {
      public entityForm: FormGroup;
      public isEdit: boolean;
    
      constructor(
        protected store: Store,
        protected route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
      ) {}
    
      ngOnInit(): void {
        const entity = this.route.snapshot.data["entity"];
    
        this.isEdit = entity ? true : false;
        this.initForm(entity || {});
      }
    
      save(): void {
        const entity = {
          id: this.entityForm.value.id,
          name: this.entityForm.value.name,
          code: this.entityForm.value.code
        };
    
        if (this.isEdit) {
          this.store.dispatch(fromEntityActions.updateEntity({ update: entity }));
        } else {
          // Otherwise add the entity as new
          this.store.dispatch(fromEntityActions.createEntity({ new: entity }));
        }
    
        this.router.navigate(["entities"]);
      }
    
      private initForm(entity: Entity) {
        this.entityForm = this.formBuilder.group({
          id: [entity.id],
          name: [entity.name],
          code: [entity.code]
        });
      }
    }
```
Delete Entity
=============

Similarly, we only need to define “**deleteEntity**” action and call the action on the delete method that we have added before:
```yaml
_entity.delete.actions.ts_

    export const deleteEntity = createAction(
      EntityActionTypes.DeleteEntity,
      props()
    );
    
    export const deleteEntitySuccess = createAction(
      EntityActionTypes.DeleteEntitySuccess
    );
    
    export const deleteEntityFail = createAction(
      EntityActionTypes.DeleteEntityFail,
      props()
    );

_entity..delete.reducer.ts_

    on(fromEntityActions.deleteEntity, (state, action) => {
      return adapter.removeOne(action.id, state);
    }),
    on(fromEntityActions.deleteEntityFail, (state, { error }) => {
      return {
        ...state,
        error
      };
    })
```
Implement the delete method as below:
```yaml
    delete(id: number) {
      // Call delete action
      const result = confirm("Are you sure you want to delete this entity?");
    
      if (result) {
        // Logic to delete the item
        this.store.dispatch(fromEntityActions.deleteEntity({ id }));
      }
    }
```

You can check and play around with my sample code at 
https://codesandbox.io/s/iczk9

Summary
=======

Coming to the end of this guide, let us have a quick recap of what we did.

*   Use **Optimistic UI** approach to make the application faster and smoother.
*   Use the **ngrx-undo** library for reverting the store as the previous state on the unsuccessful response case.

Thank for reading!