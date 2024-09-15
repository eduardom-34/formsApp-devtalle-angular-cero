import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


const rtx5090 = {
  name: 'TRX 5090',
  inStorage: 2500,
  price: 6
}


@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent  implements OnInit {

  // public myform: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  public myForm: FormGroup;

  constructor( private fb: FormBuilder )  {
    this.myForm = this.fb.group({
      name: ['', [Validators.required,  Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      inStorage: [0, [Validators.required, Validators.min(0)]],
    })
  }

  ngOnInit(): void {
    this.myForm.reset(rtx5090);
  }

  onSave():void {

    if ( this.myForm.invalid ) return;

    console.log(this.myForm.value);

    this.myForm.reset({ price: 0, inStorage: 0 });

  }

}
