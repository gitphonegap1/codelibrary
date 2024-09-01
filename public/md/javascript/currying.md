### What is currying?
---
Currying is a technique in JavaScript where a function with multiple arguments is transformed into a series of functions, each taking a single argument.

```javascript
// Example of currying
function add(a) {
    return function(b) {
        return a + b;
    }
}

const addFive = add(5);
console.log(addFive(3)); // 8
```