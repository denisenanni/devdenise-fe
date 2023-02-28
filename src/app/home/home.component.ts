import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { TextAnimation } from 'ngx-teximate';
import { fadeInTopLeft } from 'ng-animate';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements AfterViewInit{

  linkedinProfile = 'https://www.linkedin.com/in/denise-nanni/';
  gitHubProfile = 'https://github.com/denisenanni';
  soundCloudProfile = 'https://soundcloud.com/denise-nanni';
  animatedText = 'devdenise';

  shouldBounce = false;


  ngAfterViewInit(){
    this.shouldBounce = true;
  }

  initAnimation: TextAnimation = {
    animation: fadeInTopLeft,
    delay: 100,
    type: 'letter',
    isEnter: false
  };



}
