### What is async/await?
---
`async/await` is a syntax in JavaScript that allows you to write asynchronous code in a more readable and synchronous manner. It is built on top of promises.

- **`async`**: The `async` keyword is used to define an asynchronous function. The function will always return a promise.
- **`await`**: The `await` keyword is used to wait for a promise to resolve or reject. It can only be used inside an `async` function.

```javascript
// Example of async/await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
```