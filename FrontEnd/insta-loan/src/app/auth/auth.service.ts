import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { PojoService } from '../services/pojoservice';


@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private notificationCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get getNotificationCount(){
    return this.notificationCount.asObservable();
  }

  constructor(
    private router: Router,
            private pojoService: PojoService,

  ) {}

  setNotificationCount(count){
    //console.log("authservice",count);
    this.notificationCount.next(count);
  }

  login(user: User) {
  let data = user.userDetail;
    if (data.userName !== '' && data.password !== '' ) {
      this.pojoService.setNotification(user.count);
      let admin = user.userDetail.admin;
            
            if(admin == "Y"){  
                this.pojoService.setAdminFlag(true); 
              } 
              else if(admin == "N"){ 
                this.pojoService.setAdminFlag(false); 
              }
            
      this.loggedIn.next(true);
      //this.router.navigate(['/']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }

}