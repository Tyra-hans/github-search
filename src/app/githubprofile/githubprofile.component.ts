import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.css']
})


export class GithubprofileComponent implements OnInit {
  user: any;
 repos: any;
 username: '';

  constructor(private userservice: UserService) {

  }
  ngOnInit() {
  }
  searchUser(user) {
    console.log(user);
    this.getUserDetails(user);
  }

  getUserDetails(user) {
    this.userservice.getGithubUser(user).then((response) => {
      this.user = response;
    });
    this.userservice.getGithubRepos(user).then((response) => {
      console.log(response);
      this.repos = response;
    });
  }

}
