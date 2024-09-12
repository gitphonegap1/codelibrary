### Micro Frontend
---

#### What is microfrontend?

Each microfrontend represents a self-contained piece of the user interface that can be developed, deployed, and maintained independently.

1. **Independent Development**: Teams or developers can work on individual microfrontends without affecting other parts of the application.
2. **Scalability**: As the application grows, it’s easier to scale development efforts by adding or updating specific microfrontends.
3. **Decoupling**: Microfrontends can be developed using different technologies or versions of Angular, allowing for flexibility and innovation.
4. **Isolation**: Issues in one microfrontend are less likely to impact the entire application, making it easier to troubleshoot and maintain.

#### How to create microfrontend application?

Creating an application with module using the following command.

```typescript
ng new microapp --no-create-application
```

Add native federation to the application using the following command

```typescript
npm i @angular-architects/native-federation
```

Making an application a remote (Micro Frontend):

```typescript
ng g @angular-architects/native-federation:init --project users --port 4201 --type remote
```

Making an application a host (shell):

```typescript
ng g @angular-architects/native-federation:init --project rootapp --port 4200 --type dynamic-host
```

In the host app mention the route in `app.routes.ts`

```typescript
import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
export const routes: Routes = [
    {
        path: 'users',
        loadComponent: () =>{
            return loadRemoteModule('users', './Component').then(m=>m.AppComponent)
        }
    }
];

```

First run the remote application and run the host application. If we navigate to the route(`users`) the component from the users application appears.

There is a chance for getting the error for the latest version of angular

```console
ERROR RuntimeError: NG0203: inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext` 
```

To overcome the error run the following command in `gitbash` shell.

```typescript
sed -i 's/{ write: false },//' node_modules/@angular-architects/native-federation/src/builders/build/builder.js
```
