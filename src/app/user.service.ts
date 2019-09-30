import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'

})
export class UserService {
  userdata: any;
  repodata: any;
  constructor(private http: Http) {
    console.log('service is now ready .');

  }
  getGithubUser(username) {
    console.log(username);
    const promise = new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'users/' + username + '?access_token=' + environment.accessToken).toPromise().then(response => {
        this.userdata = response.json();
        resolve(this.userdata);
      },
        error => {
          console.log(error);
          reject(error);
        });
    });
    return promise;
  }
  getGithubRepos(username) {
    console.log(username);
    const promise = new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'users/' + username +
        '/repos?access_token=' + environment.accessToken).toPromise().then(response => {
          this.repodata = response.json();
          resolve(this.repodata);
        },
          error => {
            console.log(error);
            reject(error);
          });
    });
    return promise;
  }
}

