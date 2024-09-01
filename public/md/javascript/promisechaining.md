### What is promise chaining?
---
Promise chaining is a technique in which multiple promises are chained together to run sequentially. Each `.then()` returns a new promise, allowing for further chaining.

```javascript
// Example of promise chaining
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return fetch('https://api.example.com/other-data');
    })
    .then(response => response.json())
    .then(otherData => console.log(otherData))
    .catch(error => console.error('Error:', error));
```