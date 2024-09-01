### Templates
---

A template is the HTML view in Angular, where directives are written. Templates can be defined inline or in an external file.

#### Inline Templates

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'test-component',
    template: `<h4>This is sample template</h4>`,
    styleUrls: ['./test.css']
})

```

#### External Templates

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'test-component',
    templateUrl: './test.html',
    styleUrls: ['./test.css']
})

```

#### Inline Template vs. External Template in Angular

| **Feature**                     | **Inline Template**                                              | **External Template**                                            |
|---------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|
| **Definition**                  | Defined within the component's decorator using `template`        | Defined in a separate HTML file using `templateUrl`              |
| **Advantages**                  | - Concise and readable for small components                      | - Better for complex and lengthy HTML                            |
|                                 | - Fewer files to manage                                          | - Separation of concerns (logic and template)                    |
|                                 | - Simpler navigation                                             | - Enhanced reusability                                           |
|                                 |                                                                  | - Full IDE support with syntax highlighting                      |
| **Disadvantages**               | - Not suitable for complex markup                                | - Increases the number of files                                  |
|                                 | - Less readable for large templates                              | - Requires switching between files                               |
|                                 | - Limited reusability                                            | - May be overkill for simple components                          |
|                                 | - Limited syntax highlighting in some IDEs                       |                                                                  |
| **Best Use Case**               | Small components with simple HTML                                | Complex components with extensive HTML                           |
