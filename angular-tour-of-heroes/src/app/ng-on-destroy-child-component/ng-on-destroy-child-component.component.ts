
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ng-on-destroy-child',
  template: `Here is the child component.`,
  styleUrls: ['./ng-on-destroy-child-component.component.css']
})
export class NgOnDestroyChildComponentComponent implements OnInit, OnDestroy {
  constructor() { }
  ngOnInit() {
    console.log("child init")
  }
  ngOnDestroy() {
    console.log("destroying child...")
  }
}