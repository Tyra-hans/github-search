import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'

})
export class HttpService {
  userdata = [];
  private accesstoken =  '21ca38d8d9a34871a6cf02eb464443c75f27b9b1';
  constructor(private http: Http ) {
    console.log('service is now ready .');

  }

  getProfileInfo(username) {
    let promise = new Promise((resolve, reject) => {
      this.http.get('https://api.github.com/users/' + username +  '?access_token=' +  this.accesstoken).toPromise().then(response => {
        this.userdata = response.json();
        resolve();
      },
      error => {
        reject(error);
      });
    });
    // return  this.http.get('https://api.github.com/users/' + this.username + '?access_token=' + this.accesstoken);
    // this.http.get('https://api.github.com/users/' + username + this.accesstoken)
    //   .subscribe(response => {
    //     this.userdata = response.json();

    //   });
   }
  //  getProfileRepo(){
  //   return  this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token=' + this.accesstoken);
  //  }
  //  updateProfile(username: string) {
  //   //  this.username = username;
  //  }
}
