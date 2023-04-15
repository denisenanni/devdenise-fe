import { ComponentFixture, TestBed } from '@angular/core/testing';
import i18next from 'i18next';
import { I18N_PROVIDERS } from '../app.i18backend';
import { AppModule } from '../app.module';
import { AppService } from '../app.service';
import { Project } from '../model/project';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectsAndSkillsComponent } from './projects-and-skills.component';
import  ita  from 'src/locales/it.translation.json'
import  en  from 'src/locales/it.translation.json';

describe('ProjectsAndSkillsComponent', () => {
  let component: ProjectsAndSkillsComponent;
  let fixture: ComponentFixture<ProjectsAndSkillsComponent>;
  let projects: Project[] =[
    { description: 'desc test', id: 1, imageLink: 'imagelink test', link: 'link', title: 'title'},  
    { description: 'desc test', id: 1, imageLink: 'imagelink test', link: 'link', title: 'title'}]


  beforeEach((() => {
    i18next.init({ resources: {} });
    i18next.addResourceBundle('en', 'translation', en);
    i18next.addResourceBundle('it', 'translation', ita);
    TestBed.configureTestingModule({
      declarations: [ ProjectsAndSkillsComponent, ProjectCardComponent ],
      imports: [
        AppModule
      ],
      providers: [I18N_PROVIDERS, AppService],

    })
    .compileComponents();
    fixture = TestBed.createComponent(ProjectsAndSkillsComponent);
    component = fixture.componentInstance;
    component.projects = projects;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
