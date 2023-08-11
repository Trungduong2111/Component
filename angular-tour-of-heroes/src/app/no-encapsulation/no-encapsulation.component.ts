import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  template: `
  <div class="none"> 
    <h2>None</h2>
    <div class="none-message">No encapsulation</div>
  </div>
  `,
  styles: ['h2, .none-message { color: red; }', '.none{ border-style:solid; border-color: red;margin: 10px}'],
  encapsulation: ViewEncapsulation.None
})
export class NoEncapsulationComponent {

}
