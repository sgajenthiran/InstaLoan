import { Component, OnInit } from '@angular/core';
import { PojoService } from '../services/pojoservice';
import { RegisterService } from '../services/registerservice';

import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService




@Component({
selector: 'progress-spinner-overview-example',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  alert=false;
  alertMsg="";
  public persondata = [];
  alertmsgflag;
  errmsg;
  constructor(
        private registerService: RegisterService,
        private pojoService: PojoService,
        private router: Router,
        private authService: AuthService,
        private modalService: NgbModal,
        private ngxService: NgxUiLoaderService) { }

  

  ngOnInit() {
  }
 onClickSubmit(data:any) {
 console.log(data);
  this.ngxService.start(); 
    this.registerService.getData('post','getLoginAuthendicate',data).subscribe((data) => {
            
            //this.authService.login(data);
            this.ngxService.stop();
            if(data.result == "Success"){
            this.authService.login(data);
            this.persondata = data.userDetail;
              this.router.navigate(['/home']);
            }else if(data.result == "Failure"){
              console.log(data.errorMsg);
              this.alertmsgflag=true;
              this.errmsg=data.errorMsg;
            }
            
        },err =>{ this.alertmsgflag=true;
              this.errmsg="Unable to connect the server";
              console.log("error");this.ngxService.stop();})

      
   }
}
