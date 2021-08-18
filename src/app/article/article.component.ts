import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Article } from '../model/article';
import { WIP } from '../app.constants';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  error: string;
  success: string;

  idArticle: number;
  article: Article;
  notFoundMessage = WIP;


  constructor(
    protected activatedRoute: ActivatedRoute,
    protected appService: AppService
  ) {
    this.getRouteParam();
  }

  ngOnInit(): void {}

  private getRouteParam() {
    this.activatedRoute.params.subscribe((parameter) => {
      this.idArticle = parameter.id;
      this.getArticle();
    });
  }

  private getArticle() {
    this.appService.getArticleById(this.idArticle).subscribe(
      (resp) => {
        this.article = resp.body;
        this.success = 'OK';
        this.error = null;
      },
      (resp) => {
        this.success = null;
        this.error = resp.error.message;
      }
    );
  }
}
