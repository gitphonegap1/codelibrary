### RxJs
---

**What is the fullform of RxJs**

Reactive extension Javascript

**What is the purpose of RxJs?**

Main goal is to handle the Asynchronous data streams.
Let's esume there is an entity which emits the asynchronous data streams and it can be any type of data. We have listener out here who is intrested to listen async data. Rxjs helps us to handle javascript async program very easily .
    
**What are the observables and observer?**

Observable is an RxJs object which actually emits data streams.
Observer is nothing but the function which is the subscribe to the observable and listen to the data stream and returns the data stream.

**Explain the use of Subscribe with sample code?**

By using the subscribe method then only the listerner will attach to the async stream. Firstly the async needs to convert into the observable then only we can able to subscribe to the streal and attach the listener.

``` typescript
function AsyncStream(observer){
    var t1 = setInterval(()=>{
        observer.next(Math.random())
    })
}
var observ = Observable.create(AsyncStream);
observ.subscribe(res=>Listener(res));
function Listener(res){
    console.log(res)
}
```

**How to unsubscribe in RxJs?**

using `subscriber.unsubscribe()`

**Explain concept of operators with sample code?**

Operators in RxJS are functions that enable you to manipulate and transform data streams (Observables) in various ways. They can filter, map, merge, and combine streams, among other tasks.

**Common Operators:**
1. `map:` Transforms each emitted value by applying a function to it.
2. `filter:` Emits only values that pass a specified test.
3. `mergeMap:` Projects each source value to an Observable and merges the resulting Observables.
4. `switchMap:` Projects each source value to an Observable, and cancels previous inner Observables.

```typescript

import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);

// Using map and filter operators
numbers$
  .pipe(
    filter(x => x % 2 === 0), // Filter even numbers
    map(x => x * 10)          // Multiply each by 10
  )
  .subscribe(x => console.log(x)); // Output: 20, 40

```


**How to install RxJs?**

RxJS is included by default when you create a new Angular project using the Angular CLI. However, if you need to install it separately, you can do so using npm:

```javascript
npm install rxjs
```


**Differentiate between promise and RxJs?**

|Promise                    |RxJs                                   |
|:------                    |:---                                   |
|Promise return single value|Observable returns stream of data      |
|We cannot cancel a promise |We can subscribe and unsubscribe stream|



**In Angular where have you used RxJs?**

RxJs is commonly for handling http requests.

```typescript

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

constructor(){}

  public getTest = () : Observable<any> => {
    return this.http.get('json/n1.json');
  }

```

**Which operator have you used from RxJs?**

In `RxJs` i have used the following operators.

1. `firstValueFrom:` It is a utility function in RxJS that converts an Observable into a Promise, but only takes the first emitted value. Once it gets the first value from the Observable, it stops listening to the Observable and resolves the Promise with that value
2. `map:` It is an operator in RxJS that transforms each value emitted by an Observable by applying a provided function to that value. It's like the array map method, but for Observables.
3. `filter:` It is an operator in RxJS that lets only certain values pass through the Observable based on a condition. If the condition returns true, the value is emitted; otherwise, it is ignored.
4. `mergeMap:` It is an operator in RxJS that takes each value emitted by the source Observable, projects it into a new Observable, and then merges all these resulting Observables into a single Observable. It's useful for handling multiple inner Observables that need to be combined or processed concurrently.

**What is Push/reactive vs Pull/Imperative?**

Imperative programming means listener code is responssible to pull stream of data. Reactive programming means you register a callback and the stream is responsible to push data.