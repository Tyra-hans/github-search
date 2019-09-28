import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

private username: string ;


  constructor(private http: HttpClient) {
    console.log('service is working');
    this.username = 'Tyra-hans';
   }
   getProfileInfo() {
return this.http.get('https://api.github.com/users/' + this.username )
.pipe(map((response: any) => response.json()));
   }
}
