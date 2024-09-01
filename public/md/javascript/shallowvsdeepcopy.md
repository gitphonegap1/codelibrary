### What is shallow copy and deep copy in JavaScript?
---
- **Shallow Copy**: A shallow copy of an object is a copy of the object’s top-level properties. If the object contains references to other objects, only the references are copied, not the actual objects.

  ```javascript
  // Example of shallow copy
  const obj1 = { a: 1, b: { c: 2 } };
  const shallowCopy = Object.assign({}, obj1);
  shallowCopy.b.c = 3;

  console.log(obj1.b.c); // 3 (because shallowCopy only copied the reference to obj1.b)
  ```

- **Deep Copy**: A deep copy duplicates an object and all objects it references, ensuring no references to the original objects are maintained.

  ```javascript
  // Example of deep copy using JSON
  const obj2 = { a: 1, b: { c: 2 } };
  const deepCopy = JSON.parse(JSON.stringify(obj2));
  deepCopy.b.c = 3;

  console.log(obj2.b.c); // 2 (deepCopy doesn't affect the original object)
  ```

  For more complex objects, a manual deep copy or a library like `Lodash` might be needed.
