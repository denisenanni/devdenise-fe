import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {article_cards} from '../assets/articles/article_cards'
import { article1 } from '../assets/articles/article1'
import { projects } from '../assets/projects/projects'
@Injectable({
  providedIn: 'root',
})
export class AppService {
  isMobile: boolean;

  constructor() {
    this.isMobile = this.isMobileDevice();
  }

  isMobileDevice() {
    return /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent);
  }

  getArticlesCards(): Observable<any> {
    return of(article_cards);
  }

  getArticleById(id: number): Observable<any> {
    return of(article1);
  }

  getProjects(): Observable<any> {
    return of(projects);
  }
}
