import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersGridComponent } from './customers-grid.component';
import { CustomersRoutingModule } from './customerroutingmodule';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CustomersComponent, CustomersCardComponent, CustomersGridComponent],
  imports: [
    CommonModule,
    RouterModule,
    CustomersRoutingModule
  ], 
  exports :[CustomersComponent]
})
export class CustomersModule { }
