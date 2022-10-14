import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username:any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('account');
  }

  toListEmployee() {
    this.router.navigateByUrl('/view/list-employee')
  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl('/login')
  }
}
