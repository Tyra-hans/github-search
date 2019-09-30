import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  tyProfile: any;
  tyRepos: any;
  username = 'Tyra-hans';
  // tslint:disable-next-line: deprecation
  constructor(
    private userservice: UserService
  )  {
    this.getMyProfile();
    this.getMyRepos();
  }

  ngOnInit() {
  }

  getMyProfile(){

      this.userservice.getGithubUser(this.username).then((response)=>{
        console.log('Tyra Profile.----------------', response);
        this.tyProfile = response;
      })
    }

  getMyRepos() {

      this.userservice.getGithubRepos(this.username).then((response) => {
        console.log('Ty Repo.----------------', response);
        this.tyRepos = response;
      })
    }

}
