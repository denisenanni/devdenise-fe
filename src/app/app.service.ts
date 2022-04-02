import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SERVER_API_URL } from './app.constants';
import { Observable } from 'rxjs';
import { Project } from './model/project';
import { of } from 'rxjs';
import {article_cards} from '../assets/articles/article_cards'
import { article1 } from '../assets/articles/article1'
import { projects } from '../assets/projects/projects'

type EntityResponseTypeProject = HttpResponse<Project[]>;

@Injectable({
  providedIn: 'root',
})
export class AppService {
  isMobile: boolean;

  public resourceUrl = SERVER_API_URL;
  constructor(protected http: HttpClient) {
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
