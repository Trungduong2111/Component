import { Component } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  template: ` <div class="versionParent"> <h2>Source code version</h2>
  <button type="button" (click)="newMinor()">New minor version</button>
  <button type="button" (click)="newMajor()">New major version</button>
  <app-version-child [major]="major" [minor]="minor"></app-version-child>
  </div>
  `,
  styleUrls: ['./version-parent.component.css']
})
export class VersionParentComponent {
  major = 1;
  minor = 23;
  newMinor() {
    this.minor++;
  }
  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
