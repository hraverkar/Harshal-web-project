import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  private readonly gitUrl = "https://api.github.com/users/hraverkar/repos?per_page=100";
  constructor(private httpClient: HttpClient) { }
  public getGitRepo(): Observable<any> {
    return this.httpClient.get<any>(this.gitUrl);
  }
}
