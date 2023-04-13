import { ComponentFixture, TestBed } from '@angular/core/testing';
import { I18NextModule, StrictErrorHandlingStrategy } from 'angular-i18next';
import i18next from 'i18next';
import { I18N_PROVIDERS } from '../app.i18backend';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { MenuComponent } from './menu.component';
import { i18nextOptions } from '../utils/test-utils';
import { AppModule } from '../app.module';

xdescribe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [
        AppModule
      ],
      providers: [I18N_PROVIDERS],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
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
