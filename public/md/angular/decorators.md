### Decorators
---

Decorators define what kind of Angular class it is. For example, `@Component` tells Angular that the class is a component. Without a decorator, it's treated as a regular TypeScript class.

They are also called as `Annotations` / `Metadata`.

#### Types of Decorators in Angular


##### 1. Class Decorators
Decorators that are applied to classes.

- **@Component**
  - Defines a component and its metadata (e.g., template, styles).
  - Example:
    ```typescript
    @Component({
      selector: 'app-my-component',
      templateUrl: './my-component.component.html',
      styleUrls: ['./my-component.component.css']
    })
    export class MyComponent {}
    ```

- **@Directive**
  - Defines a directive and its metadata.
  - Example:
    ```typescript
    @Directive({
      selector: '[appMyDirective]'
    })
    export class MyDirective {}
    ```

- **@Injectable**
  - Marks a class as available for dependency injection.
  - Example:
    ```typescript
    @Injectable({
      providedIn: 'root'
    })
    export class MyService {}
    ```

- **@NgModule**
  - Defines a module and its metadata (e.g., declarations, imports, providers).
  - Example:
    ```typescript
    @NgModule({
      declarations: [MyComponent],
      imports: [BrowserModule],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {}
    ```

##### 2. Property Decorators
Decorators that are applied to properties within a class.

- **@Input**
  - Binds a property in a component to a value passed in from a parent component.
  - Example:
    ```typescript
    @Input() myProperty: string;
    ```

- **@Output**
  - Binds an event in a component to an event emitter that can be subscribed to by a parent component.
  - Example:
    ```typescript
    @Output() myEvent = new EventEmitter<string>();
    ```

- **@HostBinding**
  - Binds a property of the host element to a property in the directive or component.
  - Example:
    ```typescript
    @HostBinding('class.active') isActive = true;
    ```

##### 3. Method Decorators
Decorators that are applied to methods within a class.

- **@HostListener**
  - Binds a method to an event triggered by the host element.
  - Example:
    ```typescript
    @HostListener('click', ['$event'])
    handleClick(event: Event) {
      console.log('Element clicked:', event);
    }
    ```

##### 4. Parameter Decorators
Decorators that are applied to constructor parameters.

- **@Inject**
  - Specifies a custom provider for a dependency injection token.
  - Example:
    ```typescript
    constructor(@Inject('MyToken') private myService) {}
    ```

- **@Optional**
  - Marks a dependency as optional, so if it is not provided, the value will be `null`.
  - Example:
    ```typescript
    constructor(@Optional() private myOptionalService: MyService) {}
    ```

##### 5. Accessor Decorators
Decorators that are applied to getters and setters.

- **@HostBinding**
  - Can also be used to bind a getter/setter to a property of the host element.
  - Example:
    ```typescript
    @HostBinding('class.active')
    get isActive() {
      return this._isActive;
    }
    ```

