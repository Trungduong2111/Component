import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-destroy',
  template: `
  <div class="app-ng-on-destroy">
  <a (click)="update()">Update</a><br/>
  <app-ng-on-destroy-child *ngIf='showChild'></app-ng-on-destroy-child>
  </div>`,
  styleUrls: ['./ng-on-destroy-component.component.css']
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


