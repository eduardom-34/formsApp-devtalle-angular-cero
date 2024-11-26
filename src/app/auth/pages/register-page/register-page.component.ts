import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators.functions';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  public myForm: FormGroup;

  constructor( private fb: FormBuilder) {

    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)]],
      email: ['', [ Validators.required, Validators.pattern(customValidators.emailPattern)]],
      username: ['', [Validators.required, customValidators.cantBeStrider ]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]]
    });
  }

  isValidField( field: string ) {
    // TODO: Obtener validacion desde un servicio
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
