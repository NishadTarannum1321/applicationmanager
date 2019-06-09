import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() {
    console.log('Orders Component Constructor')
   }

  ngOnInit() {
    console.log('Orders Component oninit')
  }


}
