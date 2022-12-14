import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]], //if we have more than one validators, we put them inside another array
      password:['', Validators.required]
    });

    //by using snapshot we mean we r grabbing the latest value of activatedRoute(i.e. the current route), n hence we don't even need to subscribe
    //and we use queryParams to grab everything after the ? sign of the url e.g. http://...?returnUrl=/checkout
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
    console.log(this.returnUrl); //resulting undefined
  }

  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;

    this.userService.login({email:this.fc.email.value,
    password: this.fc.password.value}).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}
