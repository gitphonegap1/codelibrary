### Array methods (`unshift`, `shift`, `splice`, `map`, `filter`, `reduce`)
---
- **`unshift`**: Adds one or more elements to the beginning of an array.
  
  ```javascript
  const array = [2, 3, 4];
  array.unshift(1);
  console.log(array); // [1, 2, 3, 4]
  ```

- **`shift`**: Removes the first element from an array.
  
  ```javascript
  const array = [1, 2, 3, 4];
  array.shift();
  console.log(array); // [2, 3, 4]
  ```

- **`splice`**: Adds/removes elements from an array at a specified index.
  
  ```javascript
  const array = [1, 2, 3, 4];
  array.splice(2, 1); // Removes 1 element at index 2
  console.log(array); // [1, 2, 4]
  ```

  - **`map`**: Creates a new array by applying a function to every element of the original array.

  ```javascript
  const numbers = [1, 2, 3, 4];
  const doubled = numbers.map(num => num * 2);
  console.log(doubled); // [2, 4, 6, 8]
  ```

- **`filter`**: Creates a new array with all elements that pass the test implemented by the provided function.

  ```javascript
  const numbers = [1, 2, 3, 4];
  const even = numbers.filter(num => num % 2 === 0);
  console.log(even); // [2, 4]
  ```

- **`reduce`**: Executes a reducer function on each element of the array, resulting in a single output value.

  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(sum); // 10
  ```

These methods are powerful tools for working with arrays in JavaScript, allowing for clean and expressive code.