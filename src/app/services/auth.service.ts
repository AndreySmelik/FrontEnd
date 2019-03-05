import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLog() : boolean{
   return  (localStorage.getItem("login")=="true");
 }
}
