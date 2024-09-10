### FormBuilder
---

Here's an example of using `FormBuilder` in Angular to create a reactive form:

#### Step 1: Import `FormBuilder` and `ReactiveFormsModule`

First, ensure that `ReactiveFormsModule` is imported in your Angular module:

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### Step 2: Use `FormBuilder` to Create a Form

Inject `FormBuilder` into your component and use it to create a form:

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
```

#### Step 3: Create the Form in the Template

Add the form to the component template:

```html
<!-- app.component.html -->
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <div>
    <label for="name">Name:</label>
    <input id="name" formControlName="name" />
    <div *ngIf="userForm.get('name')?.invalid && userForm.get('name')?.touched">
      Name is required.
    </div>
  </div>

  <div>
    <label for="email">Email:</label>
    <input id="email" formControlName="email" />
    <div *ngIf="userForm.get('email')?.invalid && userForm.get('email')?.touched">
      Enter a valid email.
    </div>
  </div>

  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" formControlName="password" />
    <div *ngIf="userForm.get('password')?.invalid && userForm.get('password')?.touched">
      Password must be at least 6 characters long.
    </div>
  </div>

  <button type="submit" [disabled]="userForm.invalid">Submit</button>
</form>
```

#### Explanation

- **`FormBuilder`**: A service that helps create forms easily.
- **`formGroup`**: Defines a form group with controls (`name`, `email`, and `password`).
- **Validators**: Validates the input fields (required, email format, minimum length).
- **`(ngSubmit)`**: Triggers `onSubmit()` when the form is submitted.

This setup will create a form that validates user input for required fields, email format, and password length.

#### Hiding Form Field

To hide a form field we can use `disabled` option.

```typescript
    this.userForm = this.formBuilder.group({
      name: [{disabled: true, value: ''}, Validators.required]
    });
```

```html
   <div class="col-12 form-group" *ngIf="!userForm.get('name').disabled">
        <label for="name">Name</label>
        <input type="form-control" name="name" id="name" formControlName="name">
   </div>
```
**To enable form field** we can use the following

```typescript
    this.userForm.get('name').enable();
```

#### How to set values to form fields


##### **`setValue()`**
- **Purpose**: Set values for all form controls.
- **Requirements**: Requires values for every control in the form group. The object passed must match the form’s structure exactly.
- **Error Handling**: Throws an error if the structure of the provided object does not match the form group.
- **Use Cases**:
  - When you want to ensure that all form controls are provided with values.
  - When initializing or resetting the form with known, complete data.
  
**Example**:
```typescript
this.userForm.setValue({
  name: 'John Doe',
  age: '30',
  email: 'john.doe@example.com',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    zip: '12345'
  }
});
```

##### **`patchValue()`**
- **Purpose**: Set values for some or all form controls.
- **Requirements**: Allows partial updates. You only need to provide values for the controls you want to update. Other controls remain unchanged.
- **Error Handling**: Does not throw an error if the provided object is missing controls. It only updates the controls that are provided.
- **Use Cases**:
  - When you need to update only specific fields without affecting others.
  - When dealing with dynamic or optional fields.
  - When working with partial data from a server or user input.
  
**Example**:
```typescript
this.userForm.patchValue({
  name: 'John Doe',
  email: 'john.doe@example.com'
});
```

##### **Key Differences**
- **`setValue()`**: Strictly requires all controls to be provided; enforces exact structure.
- **`patchValue()`**: Allows partial updates; does not require all controls to be provided.

By understanding these differences, you can choose the appropriate method based on whether you need to enforce a complete match of form controls or perform flexible updates.
