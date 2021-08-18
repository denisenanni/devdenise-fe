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

  constructor(protected appService: AppService) {
    this.getProjects();
  }

  ngOnInit(): void {
    this.skills = ['Java 8', 'Spring Boot', 'Hibernate/JPA', 'SQL', 'MySQL/Postgres', 'Angular 7+', 'HTML/CSS/Bootstrap', 'AWS S3', 'AWS EC2', 'AWS Route53', 'Git', 'React', 'Vim'];
  }

  private getProjects() {
    this.appService.getProjects().subscribe(
      (r: HttpResponse<Project[]>) => {
        this.projects = r.body;
        this.success = 'OK';
        this.error = null;
      },
      (r: HttpErrorResponse) => {
        this.error = r.error;
        this.success = null;
      }
    );
  }
}
