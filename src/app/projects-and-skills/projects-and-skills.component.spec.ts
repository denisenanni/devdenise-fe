import { ComponentFixture, TestBed } from '@angular/core/testing';
import { I18NextModule, StrictErrorHandlingStrategy } from 'angular-i18next';
import i18next from 'i18next';
import { I18N_PROVIDERS } from '../app.i18backend';
import { AppModule } from '../app.module';
import { AppService } from '../app.service';
import { Project } from '../model/project';
import { ProjectCardComponent } from '../project-card/project-card.component';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ProjectsAndSkillsComponent } from './projects-and-skills.component';
import { i18nextOptions } from '../utils/test-utils';

xdescribe('ProjectsAndSkillsComponent', () => {
  let component: ProjectsAndSkillsComponent;
  let fixture: ComponentFixture<ProjectsAndSkillsComponent>;
  let projects: Project[] =[
    { description: 'desc test', id: 1, imageLink: 'imagelink test', link: 'link', title: 'title'},  
    { description: 'desc test', id: 1, imageLink: 'imagelink test', link: 'link', title: 'title'}]


  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsAndSkillsComponent, ProjectCardComponent ],
      imports: [
        AppModule
      ],
      providers: [I18N_PROVIDERS, AppService],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsAndSkillsComponent);
    component = fixture.componentInstance;
    component.projects = projects;
    i18next
        .use(HttpApi)
        .use<any>(LanguageDetector)
        .init(i18nextOptions);
    i18next.changeLanguage('it');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
