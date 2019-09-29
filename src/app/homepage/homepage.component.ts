import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Myprofile } from '../myprofile';
import { Myrepo } from '../myrepo';

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
  // tslint:disable-next-line: deprecation
  constructor(private http: Http) {
    http.get('https://api.github.com/users/tyra-hans')
      .subscribe(response => {
        this.post = response.json();

      });
    http.get('https://api.github.com/users/tyra-hans/repos')
      .subscribe(response => {
        this.myrepo = response.json();

      });
  }

  ngOnInit() {
  }

}
