import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { AppModule } from '../app.module'
import { I18N_PROVIDERS } from '../app.i18backend';
xdescribe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ BlogComponent ],
      imports: [
        AppModule
      ],
      providers: [I18N_PROVIDERS],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
