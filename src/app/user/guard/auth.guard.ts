import { Injectable } from '@angular/core';
import { CanActivate, Router,  } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private us:UserService, private route:Router){}
  canActivate():boolean{
    if(this.us.loggedIn()){
      return true;
    }else{
      this.route.navigate(["/user/login"]);

      return false;
    }
  }
}
