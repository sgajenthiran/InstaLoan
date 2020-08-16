import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/registerservice';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';




@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
public alertbox;
 model: any = {};
    test : Date = new Date();
    public persondata = [];
    focus;
    focus1;
    focus2;
    closeResult: string;
    cnfrmpaswd;
    errmsg:string;
         

    constructor(
            private registerService:RegisterService,
            private ngxService: NgxUiLoaderService,
            private authService: AuthService,
            private router: Router
            ) { }

    ngOnInit() {


    }

   onClickSubmit(data:any) {
        if(data.password == data.confirmPassword){
        this.cnfrmpaswd=false;
        this.ngxService.start();
        this.registerService.getData('post','saveUserDetails',data).subscribe((data) => {
            console.log(data);
            this.ngxService.stop();
            if(data.result == "Success"){
                this.authService.login(data);
                this.router.navigate(['/home']);
            }else if(data.result == "Failure"){
                this.cnfrmpaswd=true;
                this.errmsg='Passwords must matched';
            }
    
        },err =>{ 
            this.cnfrmpaswd=true;
            this.errmsg='Unable to process your request';
            this.ngxService.stop();
        })
      }else{
        this.cnfrmpaswd=true;
        this.errmsg='Passwords must matched';
      }
   }


  


  

}
