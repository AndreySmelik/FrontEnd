import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from '../classes/users.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private restService:RestService) { }
 public checkUsers(users: Users) {
  const params = {
    users: users
  };
   return this.restService.doCallPost('checkUsers',params);
 }
 public addUsers(users: Users) {
  const params = {
    users: users
  };
  return this.restService.doCallPost('createUsers', params);
}
 
}
