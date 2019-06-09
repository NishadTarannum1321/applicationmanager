import { Component } from '@angular/core';
import { DataService } from './core/service/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'managerapplication';
  data = [1,2,3,4];
  updateTheArr(val){
    this.data.push(val);
  }

constructor(public dataService: DataService){
  console.log("Appcomponent constructor ");
}
ngOnChanges(){
console.log("Appcomponent onchanges")
}
ngOnInit()
{
  console.log("Appcomponent oninit");
}
}