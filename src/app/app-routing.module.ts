import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path:'ProductList',component: ProductListComponent},
  {path:'OrdersList',component: OrdersListComponent},
  {path:'UsersList',component: UsersListComponent},
  {path:'Form',component: ContactFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
