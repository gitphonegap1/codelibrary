### Interceptors
---

HTTP Interceptors inspect and modify HTTP requests before they are sent to the server and responses before they reach your application. They can handle tasks like authentication and logging automatically.

There are two types of interceptors.
1. Dependency Injection Based Interceptors.
2. Function Based Interceptors

Dependency Injection Based Interceptors
--
**Structure:** Implemented as classes with specific methods (intercept) that Angular can inject into the HTTP request pipeline.

**Integration:** Registered globally using Angular's HTTP_INTERCEPTORS in a module's provider array.

**Flexibility:** Can access services and dependencies via constructor injection, making them powerful for complex tasks.

**Scalability:** Better for larger applications with multiple, reusable interceptors.

``` typescript
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpInService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
    }
}
```

Function Based Interceptors
--
**Structure:** Simple functions that process requests and responses directly.

**Integration:** Often used in custom libraries or when using frameworks that don't support DI.

**Flexibility:** Limited, as they can't directly access services or dependencies unless manually passed in.

**Scalability:** Suitable for small applications or simple, one-off tasks.

```typescript

import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from "@angular/common/http";
import { catchError, filter,map, throwError } from "rxjs";

export const InterceptorService: HttpInterceptorFn = (request?:any, next?:any) => {
    return next(request).pipe(
        catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }),
        filter((event:any)=>{
            return event instanceof HttpResponse
        }),
        map((event: HttpResponse<any>)=>{
            return event
        })
    );
}
```