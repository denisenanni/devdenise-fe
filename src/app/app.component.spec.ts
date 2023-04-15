import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { I18N_PROVIDERS } from './app.i18backend';
import { AppService } from './app.service';
import i18next from 'i18next';
import { AppModule } from './app.module';
import  ita  from "../locales/it.translation.json";
import  en  from "../locales/en.translation.json";



describe('AppComponent', () => {
  let app: AppComponent;
  beforeEach((() => {
    i18next.init({ resources: {} });
    i18next.addResourceBundle('en', 'translation', en);
    i18next.addResourceBundle('it', 'translation', ita);
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        AppModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [I18N_PROVIDERS, AppService],
    }).compileComponents();
  }));

  it('should create the app', () => {
   
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    // let debug = fixture.debugElement;
    

    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  // it(`should have as title ''DevDenise''`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('DevDenise');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('portfolio app is running!');
  // });
});
