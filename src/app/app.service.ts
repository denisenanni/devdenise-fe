import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SERVER_API_URL } from './app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public resourceUrl = SERVER_API_URL;
  constructor(protected http: HttpClient) {}

  getArticlesCards(): Observable<any> {
    return this.http.get(this.resourceUrl);
  }

  getArticleDetail(): Observable<any> {
    return this.http.get(this.resourceUrl);
  }
}
