import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
  let app: AppComponent;
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    let debug = fixture.debugElement;
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
