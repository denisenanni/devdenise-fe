import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardComponent } from './article-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ArticleCard } from '../model/article';


describe('ArticleCardComponent', () => {
  let component: ArticleCardComponent;
  let fixture: ComponentFixture<ArticleCardComponent>;
  let articleCard: ArticleCard = { id: 1, outline: 'iutlin test', title: 'test'};

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCardComponent ],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCardComponent);
    component = fixture.componentInstance;
    component.articleCard = articleCard
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
