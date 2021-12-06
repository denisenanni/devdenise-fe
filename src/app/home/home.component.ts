import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  linkedinProfile = 'https://www.linkedin.com/in/denise-nanni/';
  gitHubProfile = 'https://github.com/denisenanni';
  soundCloudProfile = 'https://soundcloud.com/denise-nanni';


  constructor() {
   }

  ngOnInit(): void {
  }

}
