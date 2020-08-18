import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor() {
  }
  title = 'DevDenise';
  

}
