import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-encapsulation',
  template: `
  <div class="ShadowDom">
    <h2>ShadowDom</h2>
    <div class="shadow-message">Shadow DOM encapsulation</div>
    <app-emulated-encapsulation></app-emulated-encapsulation>
    <app-no-encapsulation></app-no-encapsulation>
    </div>
  `,
  styles: ['h2, .shadow-message { color: blue; }', '.ShadowDom{ border-style:solid; border-color: blue; margin: 2px}'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowDomEncapsulationComponent { }
