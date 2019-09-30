import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {GithubprofileComponent} from '../githubprofile/githubprofile.component'


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  user: any;
  repos: any;
  username: any;
  constructor(private userservice: UserService) { }

  ngOnInit() {
  }
  searchUser(user) {
    this.getUserDetails(user);
  }
  getUserDetails(repo) {
    this.userservice.getGithubUser(repo).then((response) => {
      this.user = response;
    });
    this.userservice.getGithubRepos(repo).then((response) => {
      this.repos = response;
    });
  }
}
