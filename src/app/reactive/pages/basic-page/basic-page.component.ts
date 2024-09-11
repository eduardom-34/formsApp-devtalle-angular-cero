import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  // public myform: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  public myForm: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.myForm = this.fb.group({
      name: [''],
      price: [0],
      inStorage: [0],
    })
  }

  onSave():void {
    console.log(this.myForm.value);
  }

}
