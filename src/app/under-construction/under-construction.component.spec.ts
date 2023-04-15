import {  ComponentFixture, TestBed } from '@angular/core/testing';
import i18next from 'i18next';
import { I18N_PROVIDERS } from '../app.i18backend';
import  ita  from 'src/locales/it.translation.json'
import  en  from 'src/locales/it.translation.json';
import { UnderConstructionComponent } from './under-construction.component';
import { AppModule } from '../app.module';

describe('UnderConstructionComponent', () => {
  let component: UnderConstructionComponent;
  let fixture: ComponentFixture<UnderConstructionComponent>;
  

  beforeEach((() => {
    i18next.init({ resources: {} });
    i18next.addResourceBundle('en', 'translation', en);
    i18next.addResourceBundle('it', 'translation', ita);
    TestBed.configureTestingModule({
      declarations: [ UnderConstructionComponent ],
      imports: [
        AppModule
      ],
      providers: [I18N_PROVIDERS],
    })
    .compileComponents();
    fixture = TestBed.createComponent(UnderConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
