import { ComponentFixture, TestBed } from '@angular/core/testing';
import i18next from 'i18next';
import { I18N_PROVIDERS } from '../app.i18backend';
import { AppModule } from '../app.module';
import { ContactsComponent } from './contacts.component';
import  ita  from 'src/locales/it.translation.json'
import  en  from 'src/locales/it.translation.json';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(() => {
    i18next.init({ resources: {} });
    i18next.addResourceBundle('en', 'translation', en);
    i18next.addResourceBundle('it', 'translation', ita);
    TestBed.configureTestingModule({
      declarations: [ ContactsComponent ],
      imports: [
        AppModule
      ],
      providers: [I18N_PROVIDERS],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
