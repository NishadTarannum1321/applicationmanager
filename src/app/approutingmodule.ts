import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";

const routes:Routes=[
    {path: '', redirectTo: 'customers', pathMatch: 'full'},
    {path: 'customers/:id', loadChildren: './customer/customer.module#CustomerModule' },
    {path:'customers',loadChildren:"./customers/customers.module#CustomersModule"},
    {path:'orders', loadChildren:"./orders/orders.module#OrdersModule"}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}