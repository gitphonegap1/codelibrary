### What are JavaScript Sets?
---
A `Set` is a collection of unique values. A value can only occur once in a `Set`.

```javascript
// Example of a Set
const mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5); // Duplicate, will be ignored

console.log(mySet.has(1)); // true
console.log(mySet.size);   // 2
```