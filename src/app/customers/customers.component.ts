import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/service/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customersData;
  cardViewStatus=true;
  listViewStatus=false;
  loadPage(value){

    if(value === 'cardView'){
      this.cardViewStatus = true;
      this.listViewStatus = false;
    }else{
      console.log('value')
      this.cardViewStatus = false;
      this.listViewStatus = true;
      
    }
  }
  
  ngOnChanges(){
    console.log("customers component onchanges");
  }

  ngOnInit() {
    console.log("customers component oninit");
    this.data.getCustomers('/api/customers').subscribe(
      (response: ICustomer[]) => {
        this.customersData = response;
        console.log(this.customersData);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('completed communicating');
      });
     
  }
  constructor(public data:DataService) { 
    console.log("customers component constructor");
  }
}
