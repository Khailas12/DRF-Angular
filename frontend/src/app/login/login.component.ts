import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';
import { PublicService } from '../services/public.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  myForm!: FormGroup;
  constructor(private publicService: PublicService, private authService: AuthService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }
  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.authService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(
      data => {
        console.log('AppComponent onSubmit() data:', data);
      }
    )

    logout() {
      this.authService.logout();
    }
  }
}
