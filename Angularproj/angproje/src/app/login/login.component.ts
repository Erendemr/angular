import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['',Validators.required],
  });
  constructor(
    private authService: AuthService,
    private fb:FormBuilder,
    private router: Router,
  ){}
  
  
  
  login(){
    let user =this.authService.login(
      this.form.value.username,
      this.form.value.password
    );

    if(!user) {
      alert('Hatalı giriş yaptınız.');
    }else {
      this.router.navigateByUrl('/movies');
      }
    }
  }


