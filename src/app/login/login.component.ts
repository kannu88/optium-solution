import { AuthService } from './../auth.service';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService:AuthService
  ) {}

  form!: FormGroup;
  message:any;
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required, this.ValidateEmail],
      password: ['', Validators.required]
    });
  }


ValidateEmail(c:FormControl){
  let EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
  return EMAIL_REGEXP.test(c.value) ? null : {
    emailInvalid : {
      message : "Invalid Format"
    }
  }
}
  onSubmit() {
    console.log(this.form)
    if (this.form.value.email === "info@optium.com" && this.form.value.password ==="Optium@112233") {
      this.authService.login(this.form.value)
    }
    else{
      this.message="Invalid Credentials";
    }
  }

}
