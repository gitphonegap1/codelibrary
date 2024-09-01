### What does `Promise.all()` do?
---
`Promise.all()` is a method that takes an array of promises and returns a single promise. This promise resolves when all the promises in the array resolve, or it rejects if any promise rejects.

```javascript
// Example of Promise.all
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // [3, 42, "foo"]
});
```