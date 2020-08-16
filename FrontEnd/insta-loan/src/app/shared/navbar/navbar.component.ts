import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { PojoService } from '../../services/pojoservice';
import { RegisterService } from '../../services/registerservice';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    isLoggedIn$: Observable<boolean>;
    private isLogged = false;
    private isShown;
    private count;
    

    constructor(
              private registerService: RegisterService,
              public location: Location, 
              private router: Router, 
              private pojoService : PojoService,
              private authService: AuthService) {
    }

    ngOnInit() {


        this.isLoggedIn$ = this.authService.isLoggedIn;
        this.authService.isLoggedIn.subscribe((login) => {
            this.isLogged =login;
            this.isShown = this.pojoService.getAdminFlag();
            this.count=this.pojoService.getNotification();
        });


        this.router.events.subscribe((event) => {
          this.isCollapsed = true;
          if (event instanceof NavigationStart) {
             if (event.url != this.lastPoppedUrl)
                 this.yScrollStack.push(window.scrollY);
         } else if (event instanceof NavigationEnd) {
             if (event.url == this.lastPoppedUrl) {
                 this.lastPoppedUrl = undefined;
                 window.scrollTo(0, this.yScrollStack.pop());
             } else
                 window.scrollTo(0, 0);
         }
       });
       this.location.subscribe((ev:PopStateEvent) => {
           this.lastPoppedUrl = ev.url;
       });



    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '#/home' ) {
            return true;
        }
        else {

            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '#/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }

    onLogout() {
        this.authService.logout();
      }

      onLogIn() {
        this.router.navigate(['/login']);
      }

      personalLoan(){
        this.pojoService.setloanName('personalLoan');
        this.router.navigate(['/landing']);
    }

    businesslLoan(){
        this.pojoService.setloanName('businessLoan');
        this.router.navigate(['/landing']);
    }

    homeLoan(){
        this.pojoService.setloanName('homeLoan');
        this.router.navigate(['/landing']);
    }

    carLoan(){
        this.pojoService.setloanName('carLoan');
        this.router.navigate(['/landing']);
    }
}
