import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit, OnChanges {

  @Input() title: string;
  @Input() text: string;
  @Input() articleId: number;


  constructor(protected appService: AppService) {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.title);
    console.log(this.text);
    console.log(this.articleId);


  }

  goToArticle() {
    //this.appService.getArticleDetail().subscribe();
  }
}
