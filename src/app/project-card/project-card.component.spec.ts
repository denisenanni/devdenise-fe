import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardComponent } from './project-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../app.module' 
import { Project } from '../model/project';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;
  let project: Project = { description: 'desc test', id: 1, imageLink: 'imagelink test', link: 'link', title: 'title'}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCardComponent ],
      imports: [RouterTestingModule, AppModule],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    component.project = project;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
