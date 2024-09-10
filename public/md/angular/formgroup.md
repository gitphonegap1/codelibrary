### FormGroup
---

#### Step 1: Import `FormGroup` and `ReactiveFormsModule`

First, ensure that `ReactiveFormsModule` is imported in your Angular module:

```typescript
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.sass'
})
export class ReactiveFormsComponent {
formSecond:any;

constructor(private fb: FormBuilder){}
ngOnInit():void{
 this.loadFormGroup();
}



public loadFormGroup = () => {
  this.formSecond = new FormGroup({
    name: new FormControl({disabled: true, value: "Hasya"}, Validators.required)
  })
}

public getForm2 = () => {
  console.log(this.formSecond.value)
}

}

```

#### Step 2: Create the Form in the Template

Add the form to the component template:

```html
    <form [formGroup]="formSecond" (ngSubmit)="getForm2()">
        <div class="col-12 form-group">
            <label for="name">Name:</label>
            <input class="form-control" type="text" name="name" id="name" formControlName="name"/>
        </div>
        <div class="form-group text-center p-2">
            <button class="btn btn-primary" type="submit" [disabled]="pageforms.invalid">Submit</button>
        </div>
    </form>
```

#### Explanation

- **`FormGroup`**: A service that helps create forms easily.
- **`formGroup`**: Defines a form group with controls (`name`).
- **Validators**: Validates the input fields (required).
- **`(ngSubmit)`**: Triggers `onSubmit()` when the form is submitted.

This setup will create a form that validates user input for required fields.