import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-v2',
  templateUrl: './v2.component.html',
  styleUrls: ['./v2.component.css']
})
export class V2Component implements OnInit {

  @ViewChild('itemInput', {static: true}) itemInputReference: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputReference: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    const item = this.itemInputReference.nativeElement.value;
    const amount = this.amountInputReference.nativeElement.value;
    console.log(item + ', ' + amount);
  }

}
