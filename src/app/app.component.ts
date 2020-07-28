import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}
  linkedinProfile = 'https://www.linkedin.com/in/denise-nanni/';
  gitHubProfile = 'https://github.com/DeniseN90';
  customAction: 'RESUME';


}
