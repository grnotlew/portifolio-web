import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Repository } from '../shared/types/repository.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private http = inject(HttpClient);

  // constructor(private HttpClient: HttpClient) { }
  constructor() { }


  getRepos(): Observable<HttpResponse<Repository[]>> {
    return this.http.get<HttpResponse<Repository[]>>('https://api.github.com/users/grnotlew/repos');
  }
}
