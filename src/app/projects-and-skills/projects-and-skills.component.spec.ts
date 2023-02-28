import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAndSkillsComponent } from './projects-and-skills.component';

describe('ProjectsAndSkillsComponent', () => {
  let component: ProjectsAndSkillsComponent;
  let fixture: ComponentFixture<ProjectsAndSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsAndSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsAndSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
