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
