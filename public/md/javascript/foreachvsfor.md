### What is the `forEach` loop? How is it different from a `for` loop?
---
- **`forEach` loop**: The `forEach` loop is an array method that executes a provided function once for each array element.
  
  ```javascript
  // Example of forEach
  const array = [1, 2, 3];
  array.forEach(element => {
      console.log(element);
  });
  ```

- **Difference from `for` loop**:
  - `forEach` cannot be broken or used asynchronously as a `for` loop.
  - `forEach` is specifically designed for arrays.
