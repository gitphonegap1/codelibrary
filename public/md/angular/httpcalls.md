### HTTP Calls
---

HTTP calls are used to communicate between front end and backend. 

To work wih HTTP calls we need to import `HttpClientModule`.

```typescript

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // Components
  ],
  imports: [
    // Other modules
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

We can also do it by importing the `provideHttpClient` api. It was introduced in angular 15.

```typescript


import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    ...,
    provideHttpClient(withInterceptors([InterceptorService]), withInterceptorsFromDi()),
  ]
};

```

**Key Differences Between provideHttpClient and HttpClientModule:**

`HttpClientModule:` The traditional way to provide the HttpClient service. It is imported into the AppModule and included in the imports array.

`provideHttpClient:` A more streamlined way introduced in Angular 15 to provide the HttpClient service, usually used in the providers array or bootstrapApplication method.