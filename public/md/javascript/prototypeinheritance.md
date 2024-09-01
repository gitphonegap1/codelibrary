### What is prototype inheritance?
---
Prototype inheritance is a feature in JavaScript that allows one object to inherit properties and methods from another object. This is done by setting the prototype of one object to another object.

```javascript
// Example of prototype inheritance
function Animal(type) {
    this.type = type;
}

Animal.prototype.speak = function() {
    console.log(`${this.type} makes a sound.`);
};

function Dog(name) {
    this.name = name;
    Animal.call(this, 'Dog');
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(`${this.name} barks.`);
};

const dog = new Dog('Buddy');
dog.speak(); // "Dog makes a sound."
dog.bark();  // "Buddy barks."
```

Here, `Dog` inherits from `Animal`, so `Dog` instances can use the `speak` method from `Animal.prototype`.
