import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    number:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required]),
    confirmpassword:new FormControl("",[Validators.required])
  });

  constructor(private us:UserService , private route:Router) { }

  ngOnInit(): void {}

  userRegister(){
    if (this.registerForm.valid) {
      this.us.register(this.registerForm.value).subscribe((res)=>{
        this.registerForm.reset();
        // this.route.navigate(["user/login"]);
      })
    }
  }

}
