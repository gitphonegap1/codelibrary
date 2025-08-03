### What are promises?
---
A `Promise` in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. Promises provide a cleaner way to handle asynchronous code, avoiding callback hell.


#### Methods

| Type           | Description                   | Example                         |
| -------------- | ----------------------------- | ------------------------------- |
| `Promise`      | Base constructor              | `new Promise((res, rej) => {})` |
| `resolve()`    | Instant success               | `Promise.resolve("ok")`         |
| `reject()`     | Instant failure               | `Promise.reject("error")`       |
| `all()`        | All must succeed              | `Promise.all([...])`            |
| `allSettled()` | Wait for all (no matter what) | `Promise.allSettled([...])`     |
| `race()`       | First to settle wins          | `Promise.race([...])`           |
| `any()`        | First to succeed wins         | `Promise.any([...])`            |
| `thenable`     | Object with `.then()`         | `Promise.resolve(objWithThen)`  |
| `async/await`  | Syntactic sugar               | `await asyncFunc()`             |


#### Examples

```javascript
// Example of a Promise
function mockAPI(name, delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(`${name} failed`);
      else resolve(`${name} success`);
    }, delay);
  });
}

// Promise.all()
Promise.all([
  mockAPI("API1", 1000),
  mockAPI("API2", 2000, true)
])
.then(console.log)
.catch(console.error); // API2 failed

// Promise.allSettled()
Promise.allSettled([
  mockAPI("SlowAPI", 2000),
  mockAPI("FastAPI", 500)
]).then(console.log); 
/* "[
    {
        "status": "fulfilled",
        "value": "SlowAPI success"
    },
    {
        "status": "fulfilled",
        "value": "FastAPI success"
    }
]"*/

// Promise.race()
Promise.race([
  mockAPI("SlowAPI", 2000),
  mockAPI("FastAPI", 500)
]).then(console.log); // "FastAPI success"

// Promise.any()
Promise.any([
  mockAPI("SlowAPI", 0),
  mockAPI("FastAPI", 10, true)
]).then(console.log); // "SlowAPI success"

```