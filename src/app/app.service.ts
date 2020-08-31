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
  mobile: boolean;

  public resourceUrl = SERVER_API_URL;
  constructor(protected http: HttpClient) {
    this.mobile = this.isMobileDevice();
  }

  isMobileDevice() {
    return (
      typeof window.orientation !== 'undefined' ||
      navigator.userAgent.indexOf('IEMobile') !== -1
    );
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
