import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Project } from '../model/project';
import { ProjectCardComponent } from '../project-card/project-card.component';

import { ProjectsAndSkillsComponent } from './projects-and-skills.component';

describe('ProjectsAndSkillsComponent', () => {
  let component: ProjectsAndSkillsComponent;
  let fixture: ComponentFixture<ProjectsAndSkillsComponent>;
  let projects: Project[] =[
    { description: 'desc test', id: 1, imageLink: 'imagelink test', link: 'link', title: 'title'},  
    { description: 'desc test', id: 1, imageLink: 'imagelink test', link: 'link', title: 'title'}]


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsAndSkillsComponent, ProjectCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsAndSkillsComponent);
    component = fixture.componentInstance;
    component.projects = projects;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
