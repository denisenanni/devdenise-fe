import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCardComponent } from './project-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../app.module' 
import { Project } from '../model/project';
import { I18N_PROVIDERS } from '../app.i18backend';
import i18next from 'i18next';
import  ita  from 'src/locales/it.translation.json'
import  en  from 'src/locales/it.translation.json';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;
  let project: Project = { description: 'desc test', id: 1, imageLink: 'imagelink test', link: 'link', title: 'title'}

  beforeEach((() => {
    i18next.init({ resources: {} });
    i18next.addResourceBundle('en', 'translation', en);
    i18next.addResourceBundle('it', 'translation', ita);
    TestBed.configureTestingModule({
      declarations: [ ProjectCardComponent ],
      imports: [RouterTestingModule, AppModule],
      providers: [I18N_PROVIDERS],

      
    })
    .compileComponents();
    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    component.project = project;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
