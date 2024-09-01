### Services
---

In Angular, services are classes that provide specific functionality and are typically used to share data, logic, or functionalities across different components in your application. They play a key role in Angular's dependency injection (DI) system, which allows you to inject dependencies into components, directives, or other services.

```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable()

export class DataService{
store: BehaviourSubject<any> = new BehaviourSubject<any>('');
constructor(){}

get data():any{
  return this.store.value;
}

set data(value:any){
  this.store.next(value)
}

get storeObservable(){
  return this.store.asObservable();
}

}

```
