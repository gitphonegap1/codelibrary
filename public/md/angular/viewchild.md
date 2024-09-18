### ViewChild
---

**`@ViewChild` in Angular**

`@ViewChild` is a decorator used in Angular to access a child component, directive, or DOM element from the parent component's class. It allows the parent component to interact directly with the child's properties and methods or access DOM elements.

#### Syntax

```typescript
@ViewChild(selector: string | Type<any>, options?: {static?: boolean}) 
```

- **selector**: Can be a template reference variable (e.g., `#elementRef`) or a component/directive type.
- **options**: It can have a `static` option to determine when the view is queried (either `true` or `false`).

#### Example 1: Accessing a DOM Element

```html
<!-- Template with a template reference variable -->
<button #btn>Click Me</button>
```

```typescript
// Component class
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent implements OnInit {
  @ViewChild('btn', { static: true }) button: ElementRef;

  ngOnInit() {
    console.log(this.button.nativeElement); // Direct DOM access
    this.button.nativeElement.style.backgroundColor = 'blue'; // Manipulating DOM
  }
}
```

In this example, we access the `button` DOM element directly in the component using the `@ViewChild` decorator.

#### Example 2: Accessing a Child Component

```html
<!-- Template where a child component is used -->
<app-child #childComponent></app-child>
```

```typescript
// Child Component
@Component({
  selector: 'app-child',
  template: '<p>Child Component</p>'
})
export class ChildComponent {
  sayHello() {
    console.log('Hello from Child!');
  }
}

// Parent Component
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  @ViewChild('childComponent', { static: false }) child: ChildComponent;

  ngAfterViewInit() {
    this.child.sayHello(); // Accessing child component's method
  }
}
```

Here, the parent component uses `@ViewChild` to access a method in the child component.

#### `static` Option

The `static` option controls when the view child query is resolved:
- **`static: true`**: The query is resolved during the component initialization (before the view is rendered), allowing access in `ngOnInit`.
- **`static: false`**: The query is resolved after the view is fully rendered, typically used in `ngAfterViewInit`.

#### Common Use Cases
1. **DOM Element Manipulation**: Directly accessing and manipulating DOM elements, such as changing styles or adding event listeners.
2. **Child Component Interaction**: Calling methods, accessing properties, or triggering events in child components.
3. **Dynamic Content Rendering**: Useful when interacting with dynamic templates or when using structural directives like `*ngIf` (where you might need to set `static: false`).

#### Key Points to Mention:
- **When to Use**: `@ViewChild` should be used when the parent component needs to communicate with or manipulate its child component or DOM elements directly.
- **Lifecycle Hooks**: If `static: true`, the reference is available in `ngOnInit`; if `static: false`, the reference is available in `ngAfterViewInit`.
- **Best Practices**: Avoid overusing direct DOM manipulation with `@ViewChild`. Instead, prefer Angular's built-in data-binding and event systems for component interaction whenever possible.

---

This explanation covers the purpose, usage, examples, and best practices of `@ViewChild`, giving you a comprehensive response for an interview setting.