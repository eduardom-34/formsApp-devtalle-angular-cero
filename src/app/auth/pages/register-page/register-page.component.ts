import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators.functions';
import { ValidatorsService } from '../../../shared/service/validators.service';
import { EmailValidatorService } from '../../../shared/service/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  public myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidtorService: EmailValidatorService
  ) {

    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
      // email: ['', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [new EmailValidatorService()]],
      email: ['', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidtorService]],
      username: ['', [Validators.required, this.validatorsService.cantBeStrider ]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]]
    });
  }

  isValidField( field: string ) {
    return this.validatorsService.isValidField( this.myForm, field );
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
