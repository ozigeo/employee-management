import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children: [
      {
        path: 'list-employee',
        component: ListEmployeeComponent
      },
      {
        path: 'detail-employee',
        component: DetailEmployeeComponent
      },
      {
        path: 'add-employee',
        component: AddEmployeeComponent
      },
      {
        path: 'edit-employee',
        component: EditEmployeeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ListEmployeeComponent,
    DetailEmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ViewComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    OrderModule,
    ReactiveFormsModule
  ]
})
export class ViewModule { }
