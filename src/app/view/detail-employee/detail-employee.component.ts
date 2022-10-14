import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {

  listEmployee: any;

  constructor(
    private router: Router,
    private currencyPipe: CurrencyPipe
  ) { }

  ngOnInit(): void {
    this.listEmployee = localStorage.getItem('detail');
    this.listEmployee = JSON.parse(this.listEmployee)
  }

  back() {
    this.router.navigateByUrl('/view/list-employee')
  }

}
