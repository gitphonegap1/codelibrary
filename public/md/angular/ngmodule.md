### NgModule
---

NgModule is core building block in angular applications that is used to organize and configure the application. An NgModule is essentially a container that groups together related components, directives, pipes, services and provides a compilation context for the application.

The purpose of the NgModule is to provide a way to organize and modularize the application into smaller pieces. By breaking the application into several modules, it becomes easier to maintain and scale, and it is also possible to selectively load the different parts of application depending on the user needs.

``` typescript

import { NgModule } from '@angular/core';

@NgModule({
    declarations:[], // components, Directives and pipes declarations
    imports:[], // For importing modules in to the application module
    providers:[], // For services and dependencies injection
    bootstrap:[] // To identify the root component in angular
})

export class AppModule {

}

```