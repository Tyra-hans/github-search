import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Myprofile } from '../myprofile';
import { Myrepo } from '../myrepo';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  post: any;
  myprofile: Myprofile;
  myrepo: any;
  username: string;
  test: any;
  // tslint:disable-next-line: deprecation
  constructor(private http: Http, private githubuser: HttpService) {
    http.get('https://api.github.com/users/tyra-hans')
      .subscribe(response => {
        this.post = response.json();

      });
    http.get('https://api.github.com/users/tyra-hans/repos')
      .subscribe(response => {
        this.myrepo = response.json();

      });

      this.test = this.githubuser.getProfileInfo('Tyra-hans');
      console.log( 'tyra was here----------------' , this.test);

  }

  ngOnInit() {
  }

}
