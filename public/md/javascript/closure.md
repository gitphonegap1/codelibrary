### What is closure function?
---
A **closure** in JavaScript is a function that remembers the environment in which it was created, even after that environment no longer exists. In other words, a closure allows a function to access variables from an outer function's scope even after the outer function has finished executing.

### How Closures Work

Closures are created whenever a function is defined inside another function, and the inner function references variables from the outer function.

### Example of a Closure

```javascript
function outerFunction() {
    let outerVariable = 'I am from outerFunction';

    function innerFunction() {
        console.log(outerVariable); // Accessing the outer function's variable
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Logs: "I am from outerFunction"
```

### Explanation

1. **`outerFunction`** creates a local variable `outerVariable`.
2. **`innerFunction`** is defined inside `outerFunction` and has access to `outerVariable`.
3. When **`outerFunction`** is called, it returns **`innerFunction`**.
4. Even though **`outerFunction`** has finished executing, **`innerFunction`** still remembers and has access to `outerVariable` because of the closure.

### Use Cases for Closures

- **Data Privacy**: Closures can be used to create private variables or functions that cannot be accessed from outside the closure.

  ```javascript
  function counter() {
      let count = 0;

      return function() {
          count += 1;
          return count;
      };
  }

  const increment = counter();
  console.log(increment()); // 1
  console.log(increment()); // 2
  console.log(increment()); // 3
  ```

- **Callback Functions**: Closures are often used in event handlers, callbacks, and asynchronous code to maintain access to variables.

Closures are a fundamental concept in JavaScript that provide powerful ways to manage and encapsulate code.