import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  isMobile: any;
  backgroundImage: string;
  constructor(
    protected appService: AppService,
  ) {
    this.isMobile = appService.isMobile;
    this.backgroundImage = this.isMobile ? '../assets/bg.jpg' : '../assets/bg-desktop.jpg';
  }
  title = 'DevDenise';
  

}
