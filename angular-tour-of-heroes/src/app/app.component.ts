import { Component } from '@angular/core';
import { AdItem } from './ad-item';

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

  ads: AdItem[] = [];
}
