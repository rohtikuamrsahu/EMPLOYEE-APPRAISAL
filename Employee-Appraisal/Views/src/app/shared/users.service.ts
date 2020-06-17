import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { users } from './users.model';

@Injectable()
export class UserService {
  // selectedEmployee: users;
  // employees: Employee[];
  readonly signupURL = 'http://localhost:3000/auth/signup';

  readonly loginURL= 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient) { }

  sign_in(usr: users) {
    console.log(usr);
    return this.http.post(this.signupURL, usr);
  }

  sign_up(usr:users){
    return this.http.post(this.loginURL, usr);
  }

}
