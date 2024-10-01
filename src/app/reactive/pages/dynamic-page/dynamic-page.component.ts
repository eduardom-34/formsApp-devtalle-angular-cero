import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {


  public myForm: FormGroup;


  // public myForm: FormGroup = this.fb.group({
  //   name: ['', [Validators.required, Validators.minLength(3)]],
  //   favoriteGames: this.fb.array([])
  // })

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      favoriteGames: this.fb.array([
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required],
      ])
    })
  }

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }


  onSubmit():void {
    if ( this.myForm.invalid ){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
