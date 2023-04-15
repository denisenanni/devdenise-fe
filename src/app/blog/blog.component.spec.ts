import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { AppModule } from '../app.module'
import { I18N_PROVIDERS } from '../app.i18backend';
import i18next from 'i18next';
import  ita  from 'src/locales/it.translation.json'
import  en  from 'src/locales/it.translation.json';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach((() => {
    i18next.init({ resources: {} });
    i18next.addResourceBundle('en', 'translation', en);
    i18next.addResourceBundle('it', 'translation', ita);
    TestBed.configureTestingModule({
      declarations: [ BlogComponent ],
      imports: [
        AppModule
      ],
      providers: [I18N_PROVIDERS],
    })
    .compileComponents();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeDefined();
  });
});
