### What are JavaScript Maps?
---
A `Map` is a collection of key-value pairs where the keys can be of any data type. It maintains the insertion order.

```javascript
// Example of a Map
const myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 30);

console.log(myMap.get('name')); // "John"
console.log(myMap.has('age'));  // true
console.log(myMap.size);        // 2
```