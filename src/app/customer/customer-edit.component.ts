import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../core/service/data.service';
import { ICustomer } from '../shared/interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  states;
  customer:ICustomer = {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: '',
    state: {
      abbreviation: '',
      name: ''
    }
  };
  deleteMessageEnabled: boolean;
  operationText = 'Insert';
  @ViewChild('customerForm') customerForm: NgForm;




  getCustomer(id: number) {
    this.dataService.getCustomerById(id).subscribe( (customer) => {
      this.customer = customer;
    });
  }



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      const id = +params['id'];
      if (id !== 0) {
        this.operationText = 'update';
        this.getCustomer(id);
      }
    });
    this.dataService.getStates().subscribe((states) => {
      console.log('++++++++++++++', states);
      this.states = states;
    });
  }
  cancel(event) {

    this.router.navigate(['/customers']);
  }
  delete() {
    this.dataService.deleteCustomer(this.customer.id).subscribe((status: boolean) => {
      if (status) {
        this.router.navigate(['/customers']);
      } else {
        // handle the error message
      }
    });
  }
  submit() {
    if (this.customer.id === 0) {
      this.dataService.insertCustomer(this.customer).subscribe((insertCustomer: ICustomer) => {
        if (insertCustomer) {
          // this.customerForm.form.markAsPristine();
          this.router.navigate(['/customers']);
        } else {
          // error messages
        }
      });
    } else {
      this.dataService.updateCustomer(this.customer).subscribe((status:boolean) => {
        if (status) {
          // this.customerForm.form.markAsPristine();
        } else {
          // error messages 
        }
      });
    }

  }
}