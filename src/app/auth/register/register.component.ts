import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelAccount } from 'src/app/model/model-account';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  account = new FormGroup ({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  })

  accountSend = new ModelAccount;
  validatorPassword = true;

  constructor(
    private api: ApiService,
    private router:  Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    
  }

  backToLogin() {
    this.router.navigateByUrl('/login')
  }

  register() {
    if(this.account.value.password == this.account.value.confirmPassword) {
      this.validatorPassword = true;
      this.accountSend.username = this.account.value.username;
      this.accountSend.password = this.account.value.password;
      this.post(this.accountSend);
      this.toastr.success('Register Berhasil')
      this.router.navigateByUrl('/login')
    } else {
      this.validatorPassword = false;
    }
  }

  post(data:any) {
    this.api.postRegister(data).subscribe((respose)=>{
      this.accountSend = respose;
    })
    console.log(data)
  }
}
