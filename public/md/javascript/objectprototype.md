### 17) What is object prototype?
---
In JavaScript, every object has a prototype. A prototype is another object from which the original object inherits properties and methods. This mechanism is known as prototypal inheritance. When you try to access a property or method on an object and it’s not found, JavaScript automatically looks for it in the object's prototype chain.

```javascript
// Example of object prototype
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const john = new Person('John');
john.greet(); // "Hello, my name is John"
```

In this example, `greet` is defined on `Person.prototype`, so all instances of `Person` inherit this method.