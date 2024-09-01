### What is the use case of constructors in JavaScript?
---
Constructors in JavaScript are special functions used to create and initialize objects. They are invoked using the `new` keyword.

```javascript
// Example of a constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const john = new Person('John', 30);
console.log(john.name); // "John"
console.log(john.age);  // 30
```