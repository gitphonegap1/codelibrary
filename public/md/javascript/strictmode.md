### What is strict mode?
---
`"use strict"` is a directive in JavaScript that enables strict mode. Strict mode catches common coding errors and throws exceptions, making JavaScript safer to use.

- Prevents the use of undeclared variables.
- Eliminates `this` coercion.
- Disallows duplicate parameter names.

```javascript
// Example of strict mode
"use strict";

function myFunction() {
    x = 10; // Throws an error because x is not declared
}

myFunction();
```