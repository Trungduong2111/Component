import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-destroy',
  template: `<a (click)="update()">Update</a><br/>
  <app-ng-on-destroy-child *ngIf='showChild'></app-ng-on-destroy-child>`,
  styleUrls: ['./ng-on-destroy.component.css']
})
export class NgOnDestroyComponentComponent implements OnInit {

  public showChild = true;
  update() {
    this.showChild = !this.showChild
  }
  ngOnInit() {
    console.log("parent init")
  }
}


