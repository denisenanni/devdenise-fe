import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'DevDenise';
  linkedinProfile = 'https://www.linkedin.com/in/denise-nanni/';
  gitHubProfile = 'https://github.com/DeniseN90';

}
