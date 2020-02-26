import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;

  constructor(public authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/home']);
    }
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  logindata() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigate(['/home']);
  }

}
