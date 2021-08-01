import { GitService } from './../../service/git.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.scss']
})
export class GitProfileComponent implements OnInit {

  constructor(private _gitService: GitService) { }
  public githubRepoInfo: any;
  ngOnInit(): void {
    this.getGitRepo();
  }

  public getGitRepo() {
    this._gitService.getGitRepo().subscribe((res: any) => {
      this.githubRepoInfo = res;
    });
  }

}
