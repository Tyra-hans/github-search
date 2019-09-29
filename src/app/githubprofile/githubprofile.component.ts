import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.css']
})


export class GithubprofileComponent implements OnInit {
test: any;
username: any;
profileInfo: any;
accesstoken: '21ca38d8d9a34871a6cf02eb464443c75f27b9b1';
  constructor(private githubuser: HttpService, private http: Http) {
  this.test = this.http.get('https://api.github.com/users/' + this.username + '?access_token=' + this.accesstoken);
  //  this.githubuser.getProfileInfo('Tyra-hans');
  console.log( 'tyra was here----------------' , this.test);
  }
  getProfileInfo() {
  // this.http.get('https://api.github.com/users/' + this.username + '?access_token=' + this.accesstoken);

   }
  ngOnInit() {
  }

}
