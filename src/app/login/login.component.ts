import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private router:Router,
              private authService: AuthService
  ) {
    console.log('LoginComponent Constructor');
  }
  ngOnChanges(){
    console.log('LoginComponent ngOnChanges');
  }
  ngOnInit() {
    console.log('LoginComponent ngOnInit');
    this.buildForm();
  }
  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  submit({value, valid}: {value, valid: boolean}) {
    console.log('***********', value);
  console.log("***",valid);
    this.authService.login(value).subscribe((status: boolean) => {
      console.log(status);
      if (status) {
        // this part of the page is usefull when canActivate gaurd is redirecting the user to login page 
        console.log(this.authService.redirectUrl);
        if (this.authService.redirectUrl) {
          const redirectUrl = this.authService.redirectUrl;
          this.authService.redirectUrl = '';
          this.router.navigate([redirectUrl]);
        } else {
          this.router.navigate(['/customers']);
        }
      }

    });
  }

}