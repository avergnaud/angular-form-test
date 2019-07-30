import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-v3-with-validation',
  templateUrl: './v3-with-validation.component.html',
  styleUrls: ['./v3-with-validation.component.css']
})
export class V3WithValidationComponent implements OnInit {

  @ViewChild("f", {static: true}) myForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    const email = this.myForm.value.email;
    const name = this.myForm.value.name;
    console.log(email + ', ' + name);
  }

}
