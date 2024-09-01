### Lazy Loading

Lazy loading means loading only the necessary components on demand.

To implement `Lazy Loading` first we need to divide application into several modules and include the `Lazy Loading` modules into routes.

For example there is a module called `Student Module` and we want to load when ever student is logged into appliction.

#### Example for lazy loading

**Lazy Loading in Standalone Application**

```typescript

import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: 'student', loadChildren: () => import('../student.module.ts').then(m => StudentModule) 
    }
]

```

**Lazy Loading in Non Standalone Application**

```typescript

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
       path: 'student', loadChildren: () => import('../student.module.ts').then(m => StudentModule) 
    }  
]

@NgModule({
    imports: [RouterModule.forEach(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {

}
```