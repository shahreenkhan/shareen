import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url="http://localhost:2000/api/";
  
  constructor(private http:HttpClient , private router:Router) { }

  register(user:any){
    console.log(user);
    return this.http.post<any>(this.url + 'register/',user)
  }

  login(user:any){
    // console.log('user');
    return this.http.post<any>(this.url + 'verifylogin/',user)
  }

  loggedIn(){
    return !!localStorage.getItem("token");
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/user/login"])
  }

}
