import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SERVER_API_URL } from './app.constants';
import { Observable } from 'rxjs';
import { Project } from './model/project';

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
    return this.http.get(this.resourceUrl + 'get-articles-cards');
  }

  getArticleById(id: number): Observable<any> {
    return this.http.get(this.resourceUrl + 'get-article/' + id, {
      observe: 'response',
    });
  }

  getProjects(): Observable<EntityResponseTypeProject> {
    return this.http.get<Project[]>(this.resourceUrl + 'get-projects', {
      observe: 'response',
    });
  }
}
