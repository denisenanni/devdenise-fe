import { ComponentFixture, TestBed } from '@angular/core/testing';
import { I18NextModule, StrictErrorHandlingStrategy } from 'angular-i18next';
import i18next from 'i18next';
import { I18N_PROVIDERS } from '../app.i18backend';
import { AppModule } from '../app.module';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { ContactsComponent } from './contacts.component';
import { i18nextOptions } from '../utils/test-utils';

xdescribe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsComponent ],
      imports: [
        AppModule
      ],
      providers: [I18N_PROVIDERS],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    i18next
        .use(HttpApi)
        .use<any>(LanguageDetector)
        .init(i18nextOptions);
    i18next.changeLanguage('it');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
