### Interview Questions
---

#### 1. **Deep Copy for Object and Array**
   - **Object**: Use `JSON.parse(JSON.stringify(obj))` or `structuredClone(obj)` (modern browsers).
   - **Array**: Use `array.slice()`, `[...array]`, or `JSON.parse(JSON.stringify(array))` for nested arrays.
   ```javascript
   const obj = { a: 1, b: { c: 2 } };
   const deepCopyObj = JSON.parse(JSON.stringify(obj)); // Deep copy object

   const arr = [1, [2, 3]];
   const deepCopyArr = JSON.parse(JSON.stringify(arr)); // Deep copy array
   ```

#### 2. **Object Destructuring**
   - Destructuring allows unpacking values from arrays or objects.
   ```javascript
   const [first, ...b] = [1, 2, 3, 4, 6, 7]; // Array destructuring
   console.log(first); // 1
   console.log(b); // [2, 3, 4, 6, 7]
   ```

#### 3. **Async and Await**
   - `async`/`await` simplifies working with Promises, making asynchronous code easier to read and write.
   ```javascript
   async function fetchData() {
     try {
       const response = await fetch('https://api.example.com/data');
       const data = await response.json();
       console.log(data);
     } catch (error) {
       console.error(error);
     }
   }
   ```

#### 4. **Callback**
   - A function passed as an argument to another function, executed after a task is completed.
   ```javascript
   function fetchData(callback) {
     setTimeout(() => {
       callback('Data fetched');
     }, 1000);
   }

   fetchData(console.log); // Logs "Data fetched" after 1 second
   ```

#### 5. **Data Binding in Angular**
   - **Data binding**: Syncs data between model and view.
   - Types:
     - **Interpolation**: `{{ variable }}`
     - **Property binding**: `[property]="expression"`
     - **Event binding**: `(event)="expression"`
     - **Two-way binding**: `[(ngModel)]="property"`

#### 6. **Angular Lifecycle Hooks**
   - Methods that Angular calls at specific stages of a component's lifecycle.
     - `ngOnInit`, `ngOnChanges`, `ngDoCheck`, `ngAfterViewInit`, `ngAfterContentInit`, `ngOnDestroy`.

#### 7. **When `ngOnChanges` is Triggered?**
   - Triggered when any input-bound property changes.

#### 8. **What is `ngDoCheck`?**
   - Custom change detection logic, called during every change detection run.

#### 9. **Passing Object as Input and `ngOnChanges` Behavior**
   - `ngOnChanges` is called if the reference of the object changes, not when a property value changes.

#### 10. **Change Detection and Types**
   - Determines when the view should update.
   - Types: **Default** and **OnPush**.

#### 11. **View Encapsulation in Angular**
   - Controls the styles' scope:
     - **None**: No encapsulation, global styles.
     - **Emulated**: Default, scoped styles with attributes.
     - **ShadowDOM**: Uses Shadow DOM API for strict encapsulation.

#### 12. **Angular Directives and Types**
   - Directives: Classes that add behavior to elements.
   - Types: 
     - **Component**: Custom elements.
     - **Structural**: `*ngIf`, `*ngFor`, `*ngSwitch`.
     - **Attribute**: `ngClass`, `ngStyle`.

#### 13. **Using `*ngIf` and `*ngFor` on Same Element**
   - Not allowed directly; use `<ng-container>`.
   ```html
   <ng-container *ngIf="condition">
     <div *ngFor="let item of items">{{ item }}</div>
   </ng-container>
   ```

#### 14. **`trackBy` Usage**
   - Optimizes performance by tracking changes in `*ngFor`.
   ```html
   <div *ngFor="let item of items; trackBy: trackByFn">{{ item }}</div>
   ```

#### 15. **Difference between `ng-container` vs `ng-template`**
   - **`ng-container`**: Groups elements without adding to DOM.
   - **`ng-template`**: Template element for rendering dynamic content.

#### 16. **Sharing Data Between Components**
   - Use **Input**/**Output** decorators, **Services**, **RxJS** observables.

#### 17. **What is a Service?**
   - A singleton class for sharing data/logic across components.

#### 18. **`provideIn` Property in `@Injectable`**
   - Specifies the root or specific module for a service instance:
     - `'root'`, `'platform'`, `'any'`.

   The `provideIn` property in `@Injectable` defines where the service should be provided and the scope of its instance. Here are the main options:

1. **`provideIn: 'root'`**  

   The service is available throughout the entire application and a singleton instance is created.

   ```typescript
   @Injectable({
     providedIn: 'root'
   })
   export class MyService {}
   ```
   - **Scope**: Application-wide, singleton.
   - **Use Case**: Most common, for services used in multiple components.

2. **`provideIn: 'platform'`**  
   The service is provided at the platform level and shared across multiple Angular applications running on the same platform.

   ```typescript
   @Injectable({
     providedIn: 'platform'
   })
   export class MyService {}
   ```
   - **Scope**: Across all Angular apps on the same platform.
   - **Use Case**: Services shared across multiple Angular apps.

3. **`provideIn: 'any'`**  
   The service is provided in every lazy-loaded module, resulting in a new instance for each module.

   ```typescript
   @Injectable({
     providedIn: 'any'
   })
   export class MyService {}
   ```
   - **Scope**: New instance for each lazy-loaded module.
   - **Use Case**: Services with state that need to be isolated between modules.

4. **`provideIn: ModuleName`**  
   You can also provide the service only in a specific module.

   ```typescript
   @Injectable({
     providedIn: MyModule
   })
   export class MyService {}
   ```
   - **Scope**: Only available in the specified module.
   - **Use Case**: Services used in a limited context (e.g., feature modules).

#### 19. **Multiple Module Providers**
   - Adding a service to multiple modules creates multiple instances.

#### 20. **Difference between `FormGroup` and `FormArray`**
   - **`FormGroup`**: Manages a group of controls.
   - **`FormArray`**: Manages an array of controls.

#### 21. **What is a Pipe?**
   - Transforms displayed data (`{{ value | pipe }}`).

#### 22. **What is an Async Pipe?**
   - Subscribes to an observable or promise, automatically handles subscriptions.

#### 23. **Difference Between Pure and Impure Pipes**
   - **Pure**: No side effects, only called when input changes.
   - **Impure**: Called every change detection cycle.

#### 24. **What is an Interceptor?**
   - Intercepts HTTP requests/responses for processing.

#### 25. **Calling APIs in Angular**
   - Use `HttpClient` service:
   ```typescript
   this.http.get('url').subscribe(data => console.log(data));
   ```

#### 26. **Difference Between `forkJoin` vs `mergeMap`**
   - **`forkJoin`**: Runs observables in parallel, waits for all to complete.
   - **`mergeMap`**: Maps each value to an observable, flattens results.

#### 27. **RXJS Operators**
   - Common operators: `map`, `filter`, `mergeMap`, `switchMap`, `debounceTime`.

#### 28. **What is `switchMap`?**
   - Cancels previous observable when a new one starts.

#### 29. **Difference Between Subject vs Observable**
   - **Subject**: Multicasts to many observers.
   - **Observable**: Unicasts to a single observer.

#### 30. **What is `@ViewChild`?**
   - Accesses a child component or directive in the parent.

#### 31. **What is `ng-content`?**
   - Projects content from a parent component into a child component.

#### 32. **Constructor vs `ngOnInit`**
   - **Constructor**: Initializes class members.
   - **`ngOnInit`**: Executes after the constructor, initializes data.

#### 33. **Position: Relative vs Absolute**
   - **Relative**: Positioned relative to its normal position.
   - **Absolute**: Positioned relative to the nearest positioned ancestor.

#### 34. **Display: Flex and Grid**
   - **Flex**: Aligns items along a single axis.
   - **Grid**: Aligns items in rows and columns.

#### 35. **Responsive Design**
   - Adapts web layout to different devices.

#### 36. **Inline and Block Elements**
   - **Inline**: Doesn't start a new line (`<span>`, `<a>`).
   - **Block**: Starts a new line (`<div>`, `<p>`).

#### 37. **New Features in HTML5**
   - Semantics (`<header>`, `<footer>`), new APIs (Web Storage, Geolocation).

#### 38. **Box Model**
   - Represents element size: `content + padding + border + margin`.

#### 39. **Lazy Loading in Angular**
   - Loads feature modules asynchronously to improve performance.

#### 40. **Compilers in Angular**
   - **JIT** (Just-In-Time) and **AOT** (Ahead-Of-Time).

#### 50. **What is typescript?**

   TypeScript is a superset of JavaScript developed by Microsoft that adds static typing and other features to improve code reliability and maintainability in large-scale applications. It allows developers to define types for variables, functions, and objects, helping to catch errors early during development.

   Key features include:

   1. **Static Typing**: Ensures that variables and function arguments adhere to specific types, which reduces runtime errors.
   2. **Interfaces**: Allow for defining object shapes, ensuring consistency across the codebase.
   3. **Classes and OOP Support**: TypeScript supports object-oriented programming with features like classes, inheritance, and access modifiers.
   4. **Type Inference**: Automatically infers types when not explicitly defined.
   5. **Generics**: Provides reusable components and functions that can work with various types.

   TypeScript is fully compatible with JavaScript, so any valid JavaScript code is also valid TypeScript. This makes it easier to adopt TypeScript in existing JavaScript projects while still benefiting from strong typing, better tooling, and code maintainability.

#### 51. **Disadvantages of Typescript**

While TypeScript offers many benefits, there are some **disadvantages** you should be aware of:

1. **Compilation Overhead**:
   - TypeScript code needs to be compiled (transpiled) into JavaScript, which adds an extra step in the development workflow. This can slow down development, especially for larger projects.
   
2. **Learning Curve**:
   - Developers familiar with JavaScript but new to TypeScript may need time to learn its additional concepts like static types, interfaces, generics, and decorators.

3. **Complex Configuration**:
   - Setting up TypeScript for large projects can be more complex due to the `tsconfig.json` file and the need to manage compiler options, especially when integrating with other build tools (Webpack, Babel, etc.).

4. **Type System Overhead**:
   - While static typing helps catch errors early, it can also add extra code (defining types, interfaces, etc.), which can feel redundant, especially in smaller projects or dynamic codebases.

5. **Third-Party Library Support**:
   - Not all JavaScript libraries come with TypeScript type definitions. You may need to install third-party type definitions (`@types/`) or write custom ones, which adds effort.

6. **Strictness Can Be Limiting**:
   - The strict type system can sometimes feel restrictive, especially for developers used to the dynamic nature of JavaScript. This may result in more time spent dealing with type errors rather than actual application logic.

7. **Increased Build Time**:
   - Larger projects in TypeScript can lead to longer build times due to the added type-checking process, especially if not properly optimized with tools like incremental builds or caching.
