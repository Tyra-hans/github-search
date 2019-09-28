import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
post: any;
  // tslint:disable-next-line: deprecation
  constructor(private http: Http ) {
    http.get('https://api.github.com/users/tyra-hans')
    .subscribe(response => {
      this.post = response.json() ;
    });
   }

  ngOnInit() {
  }

}
