import { Component, OnInit } from '@angular/core';
import { ModelEmployee } from 'src/app/model/model-employee';
import { FormGroup, FormControl, Validators, PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  formGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl(''),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    birthDate: new FormControl(new Date()),
    basicSalary: new FormControl('',[Validators.required]),
    status: new FormControl('',[Validators.required]),
    group: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
  })

  employee: ModelEmployee = new ModelEmployee

  constructor(
    private router: Router,
    private api: ApiService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  addEmployee() {
    console.log(this.formGroup.value)
    this.api.postAddEmployee(this.formGroup.value).subscribe((respose)=>{
      // this.formGroup = respose;
      this.toastr.success('Add Employee Berhasil')
      this.router.navigateByUrl('/view/list-employee')
    })

  }

  back() {
    this.router.navigateByUrl('/view/list-employee')
  }
}
