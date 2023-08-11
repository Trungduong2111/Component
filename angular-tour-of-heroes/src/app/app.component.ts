import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  colSpan() {
    return null;
  }
  label = 'This is my label';
  user = {
    name: 'Tiep Phan',
    age: 12,
  };
}
