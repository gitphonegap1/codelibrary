### What are iterators and generators?
---
- **Iterators**: An iterator is an object that enables traversing through a collection, returning one element at a time.
  
  ```javascript
  // Example of an iterator
  const myArray = [1, 2, 3];
  const iterator = myArray[Symbol.iterator]();

  console.log(iterator.next().value); // 1
  console.log(iterator.next().value); // 2
  console.log(iterator.next().value); // 3
  ```

- **Generators**: A generator is a special type of function that can be paused and resumed, producing a sequence of values.

  ```javascript
  // Example of a generator
  function* generatorFunction() {
      yield 1;
      yield 2;
      yield 3;
  }

  const generator = generatorFunction();

  console.log(generator.next().value); // 1
  console.log(generator.next().value); // 2
  console.log(generator.next().value); // 3
  ```

  <script async src="//jsfiddle.net/krishna1216/jokx69yr/10/embed/js/"></script>