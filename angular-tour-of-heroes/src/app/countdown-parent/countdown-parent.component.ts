import { Component } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';
@Component({
  selector: 'app-countdown-parent',
  template: `
    <h3>Countdown to Liftoff (via local variable)</h3>
    <button type="button" (click)="timer.start()">Start</button>
    <button type="button" (click)="timer.stop()">Stop</button>
    <div class="seconds">{{timer.seconds}}</div>
    <app-countdown-timer #timer></app-countdown-timer>
  `,
  styleUrls: ['./countdown-parent.component.css']
})
export class CountdownParentComponent {

}
