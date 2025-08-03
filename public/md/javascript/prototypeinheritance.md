### What is prototype inheritance?
---
Prototype inheritance is a feature in JavaScript that allows one object to inherit properties and methods from another object. This is done by setting the prototype of one object to another object.

```javascript
// Example of prototype inheritance
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.speak(); // Animal speaks
dog.bark();  // Woof!
```

Here, `Dog` inherits from `Animal`, so `Dog` instances can use the `speak` method from `Animal.prototype`.

<iframe width="100%" height="300" src="//jsfiddle.net/krishna1216/rsev8gb7/25/embedded/" frameborder="0" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>