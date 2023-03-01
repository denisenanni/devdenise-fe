import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeximateModule } from 'ngx-teximate';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        BrowserAnimationsModule,
        TeximateModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
