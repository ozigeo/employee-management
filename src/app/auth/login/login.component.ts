import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.api.getAccount().subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      });
      console.log(this.loginForm.value)
      if(user){
        localStorage.setItem('account', this.loginForm.value.username)
        this.loginForm.reset();
        this.router.navigateByUrl('/view/list-employee')
      } else {
        alert('User not found')
      }
    }, err=>{
      alert('Something went wrong')
    })
  }

  register() {
    this.router.navigateByUrl('/register')
  }
}
