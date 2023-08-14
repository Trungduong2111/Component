import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-basic',
  template: `
  <div class="SingleSlotContent">
  <h2>Single-slot content projection</h2>
  <ng-content></ng-content>
  </div>
`,
  styleUrls: ['./zippy-basic.component.css']
})
export class ZippyBasicComponent {

}
