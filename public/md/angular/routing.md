### Routing
---

Define a collection of routes and specify which component to load for each route. Use `<router-outlet/>` in HTML to designate where the content will be loaded.

#### Routing in Standalone Application

We need to configute the list of routes in `app.routes.ts` file. Imports the **routes** in the `app.config.ts` file.
 
```typescript

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component.ts';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    }
]

```
Importing in `app.config.ts` file.

```typescript

import { route } from './app.route.ts';

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes)]

}


```


#### Routing in Non Standalone Application 

We need to configute the list of routes in `app.routes.module.ts` file. Importing `AppRouterModule` and **declared** in imports section in `app.module.ts` file.

```typescript

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component.ts';

const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    }  
]

@NgModule({
    imports: [RouterModule.forEach(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {

}

```

Importing in `app.module.ts` file

```typescript

import { AppRouterModule } from './app.routing.module.ts';

@ngModule({
    imports: [AppRoutingModule]
})

```