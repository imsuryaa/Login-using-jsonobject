import { Injectable } from '@angular/core';
import * as db from '../users.json';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users:  Array<any>  = (db  as  any).default;
  constructor(public router:Router) {
  }

  login(credentials){
    let user = this.users.filter(_user => {
      if (_user.name === credentials.name && _user.password === credentials.password){
        this.router.navigate(['/home']);
        return _user
      }
    });

    if (user.length){
      return user
    }
    else {
      return null
    }
  }
}
