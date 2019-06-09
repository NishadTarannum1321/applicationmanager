import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginLogoutText = 'Login';
  sub;
  loginOrOut() {
    const isAuthenticated = this.authService.isAuthenticated;
    if (isAuthenticated) {
      this.authService.logout().subscribe((status) => {
        // console.log(this);
        this.setLoginLogOutText();
        this.router.navigate(['/customers']);
        return;
      });
    } else {
      // this.setLoginLogOutText();
      this.router.navigate(['/login']);
    }
  }

  setLoginLogOutText() {
    console.log('setLoginLoout file', this.authService.isAuthenticated);
    this.loginLogoutText = (this.authService.isAuthenticated) ? 'Logout' : 'Login';
  }
  constructor(private authService: AuthService, private router:Router) {
    console.log('Navbar Component Constructor ');
  }
  ngOnChanges(val) {
    console.log('Navbar Compnent ngOnChanges', val);
    // this.randomName = val.currentValue
  }
  ngOnInit() {
    this.sub = this.authService.authChanged.subscribe((loggedIn: boolean) => {
      this.setLoginLogOutText();
    });
    console.log('Navbar Component ngOnInit');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}