import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ArticleCard } from '../model/article';
import { WIP } from '../app.constants';


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  articlesCards: ArticleCard[];
  notFoundMessage = WIP;

  constructor(protected appService: AppService) {}



  ngOnInit(): void {
    this.getArticlesCards();
  }

  getArticlesCards() {
    this.appService.getArticlesCards().subscribe(resp => {
      this.articlesCards = resp;
    });
  }
}
