import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardComponent } from './project-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../app.module' 
import { Project } from '../model/project';
import { I18NextModule, StrictErrorHandlingStrategy } from 'angular-i18next';
import { I18N_PROVIDERS } from '../app.i18backend';
import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { i18nextOptions } from '../utils/test-utils';

xdescribe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;
  let project: Project = { description: 'desc test', id: 1, imageLink: 'imagelink test', link: 'link', title: 'title'}

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCardComponent ],
      imports: [RouterTestingModule, AppModule],
      providers: [I18N_PROVIDERS],

      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    component.project = project;
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
