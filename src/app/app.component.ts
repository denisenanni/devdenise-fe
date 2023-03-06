import { Component,  DoCheck,  ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements DoCheck {
  isMobile: any;
  backgroundImage: string;
  isHomePage: boolean
  constructor(
    protected appService: AppService,
    protected router: Router
  ) {
    this.isHomePage = router.url === '/';
    this.isMobile = appService.isMobile;
    this.backgroundImage = this.isMobile ? '../assets/bg.jpg' : '../assets/bg-desktop.jpg';
  }
  title = 'DevDenise';

   ngDoCheck(): void {
    this.isHomePage = this.router.url === '/';
  }
  
  

}
