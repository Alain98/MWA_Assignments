import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private user: object;
  private postsUser: object;

  constructor(public http: HttpClient) { }
  getPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
  }

  getUserData() {
    return this.http.get('http://jsonplaceholder.typicode.com/users/1');
  }
}
