### What are promises?
---
A `Promise` in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. Promises provide a cleaner way to handle asynchronous code, avoiding callback hell.

```javascript
// Example of a Promise
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed!");
    }
});

myPromise.then((message) => {
    console.log(message); // "Operation was successful!"
}).catch((error) => {
    console.error(error);
});
```