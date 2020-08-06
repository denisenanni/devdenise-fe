import { Component, OnInit } from '@angular/core';
import { ArticleCard, Article } from '../model/article';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articleCards: ArticleCard[];
  articleCard: ArticleCard;
  title = "How to set up a WordPress site on an EC2 AWS instance with an SSL certificate";
  text = "With AWS it is possible to deploy a WordPress site within minutes";


  constructor() {
    this.articleCards = [];
    this.articleCard = new ArticleCard(); 
   }

  ngOnInit(): void {
  }

}
