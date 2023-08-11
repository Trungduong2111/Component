import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulated-encapsulation',
  template: `
  <div class="emulated">
    <h2>Emulated</h2>
    <div class="emulated-message">Emulated encapsulation</div>
    <app-no-encapsulation></app-no-encapsulation>
    </div>
  `,
  styles: ['h2, .emulated-message { color: green; }', '.emulated{ border-style:solid; border-color: green;margin: 10px}'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EmulatedEncapsulationComponent { }
