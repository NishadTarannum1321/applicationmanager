import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CustomersComponent } from "./customers.component";

const routes = [
    {path:'',component:CustomersComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CustomersRoutingModule{

}