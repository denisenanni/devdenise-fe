import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AppService } from '../app.service';
import { ArticleCard } from '../model/article';
import { Router } from '@angular/router';

@Component({
  selector: 'ArticleCardComponent',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit, OnChanges {

  @Input() articleCard: ArticleCard;


  constructor(
    protected appService: AppService,
    protected router: Router) {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  goToArticle() {
    this.router.navigate(['/article', this.articleCard.id]);
  }
}
