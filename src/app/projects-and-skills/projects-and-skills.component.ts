import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Project } from '../model/project';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'projects-and-skills',
  templateUrl: './projects-and-skills.component.html',
  styleUrls: ['./projects-and-skills.component.scss'],
})
export class ProjectsAndSkillsComponent implements OnInit {
  error: string;
  success: string;

  projects: Project[];

  skills: string [];
  showSkills = false;

  constructor(protected appService: AppService) {
    this.getProjects();
  }

  ngOnInit(): void {
    this.skills = ['Java 8', 'Spring Boot', 'Hibernate/JPA', 'MySQL/Postgres', 'Angular 7+', 'React', 'HTML/CSS/Bootstrap', 'AWS S3', 'AWS EC2', 'AWS Route53', 'Git', 'Vim'];
  }

  private getProjects() {
    this.appService.getProjects().subscribe(
      (r ) => {
        this.projects = r;
        this.success = 'OK';
        this.error = null;
      },
      (r ) => {
        this.error = r.error;
        this.success = null;
      }
    );
  }
}
