import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  constructor(protected appService: AppService) {}

  ngOnInit(): void {}

  getArticlesCards() {
    // this.appService.getArticlesCards().subscribe();
  }
}
