import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './approutingmodule';
import { LoginModule } from './login/login.module';
import{HttpClientModule} from '@angular/common/http';
import { DataService } from './core/service/data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    CoreModule,
    FormsModule
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

