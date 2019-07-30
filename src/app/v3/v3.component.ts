import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-v3',
  templateUrl: './v3.component.html',
  styleUrls: ['./v3.component.css']
})
export class V3Component implements OnInit {

  @ViewChild("f", {static: true}) myForm: NgForm;

  defaultAmount: number = 5;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    const item = this.myForm.value.item;
    const amount = this.myForm.value.amount;
    console.log(item + ', ' + amount);
  }

}
