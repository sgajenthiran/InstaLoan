import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { PojoService } from '../../services/pojoservice';
import { RegisterService } from '../../services/registerservice';
import { interval, Subscription } from 'rxjs';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
subscription: Subscription;
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    isLoggedIn$: Observable<boolean>;
    private isLogged = false;
    private isShown;
    private count;
    private alertbox = false;
    notificationcount$:Observable<number>;
    private source = interval(10000);
private text = 'Your Text Here';


    constructor(
              private registerService: RegisterService,
              public location: Location, 
              private router: Router, 
              private pojoService : PojoService,
              private authService: AuthService) {
    }

    ngOnInit() {

        const source = interval(10000);
    const text = 'Calling getAlertList navbar';
    this.subscription = source.subscribe(val => this.opensnack(text));

        this.isLoggedIn$ = this.authService.isLoggedIn;
        this.notificationcount$ = this.authService.getNotificationCount;
        this.authService.isLoggedIn.subscribe((login) => {
        console.log("authservices");
            this.isLogged =login;
            this.alertbox=false;
            this.isShown = this.pojoService.getAdminFlag();
            this.count=this.pojoService.getNotification();
        });
        
        this.authService.getNotificationCount.subscribe((count) => {
        console.log("*********");
        console.log(this.count +" "+ count);


        if(this.count < count){
          this.alertbox = true;
          
        }else{
          this.alertbox=false;

        }
        this.count=count;
        
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
opensnack(text) {
    // I've just commented this so that you're not bombarded with an alert.
    console.log(text);

       this.registerService.getData('get','getalertlist','').subscribe((data) => {
            if(data.result == "Success"){
              this.authService.setNotificationCount(data.count);
            }else if(data.result == "Failure"){
              console.log("error");
            }
            
        },err =>{ console.log("error");})
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
