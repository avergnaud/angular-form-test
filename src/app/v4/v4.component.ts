import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-v4',
  templateUrl: './v4.component.html',
  styleUrls: ['./v4.component.css']
})
export class V4Component implements OnInit {

  myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'amount': new FormControl(null)
    });
  }

  onAdd() {
    console.log(this.myForm.value);
  }

}
