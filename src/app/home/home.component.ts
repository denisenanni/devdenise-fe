import { Component, OnInit } from '@angular/core';
import { ArticleCard } from '../model/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articleCards: ArticleCard[];

  constructor() {
    this.articleCards = [];
   }

  ngOnInit(): void {
  }

}
