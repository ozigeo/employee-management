import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';
import { ModelEmployee } from 'src/app/model/model-employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  title = 'pagination';
  listEmployee: ModelEmployee[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];

  searchValue: string = '';

  constructor(
    private api:ApiService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getListEmployee();
  }

  getListEmployee():void {
    this.api.getAll().subscribe((respose)=>{
      this.listEmployee = respose;
      console.log(this.listEmployee);
    })
  }

  onTableDataChange(event:any) {
    this.page = event;
    // this.getListEmployee();
  }

  onTableSizeChange(event:any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getListEmployee();
  }

  toEditEmployee(event:any) {
    console.log(event)
    this.toastr.warning('Edit ' + event.firstName + ' ' + event.lastName + ' Success', 'Edit')
  }

  toDeleteEmployee(event:any) {
    console.log(event)
    this.toastr.error('Delete ' + event.firstName + ' ' + event.lastName + ' Success', 'Delete')
  }

  viewDetail(detail:any) {
    localStorage.setItem('detail', JSON.stringify(detail))
    this.router.navigateByUrl('/view/detail-employee')
  }

  search() {
    if(this.searchValue == ""){
      this.getListEmployee();
    } else {
      this.listEmployee = this.listEmployee.filter(res => {
        return res.firstName.toLocaleLowerCase().match(this.searchValue.toLowerCase())
      });
    }
  }

  shortValue: string = 'shortValue';
  reverse: boolean = false;
  short(shortValue:any) {
    this.shortValue = shortValue;
    this.reverse = !this.reverse
  }

  addEmployee() {
    this.router.navigateByUrl('/view/add-employee')
  }
}
