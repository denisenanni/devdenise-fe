import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../model/project';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'ProjectCardComponent',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  mobile: boolean;

  constructor(
    protected router: Router, 
    protected appService: AppService) {}

  ngOnInit(): void {
    this.mobile = this.appService.isMobile;
  }

  goToProject() {
    window.open(this.project.link, '_blank');
  }
}
