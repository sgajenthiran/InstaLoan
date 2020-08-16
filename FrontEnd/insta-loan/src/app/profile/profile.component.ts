import { Component, OnInit } from '@angular/core';
import { PojoService } from '../services/pojoservice';
import { RegisterService } from '../services/registerservice';
import { interval, Subscription } from 'rxjs';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
	  subscription: Subscription;

	private dataArray=[];

private source = interval(10000);
private text = 'Your Text Here';

    constructor(
    	private registerService: RegisterService,
    	private pojoService : PojoService
    	//subscription: Subscription


    ) { }

    ngOnInit() {

     // This is METHOD 1
    const source = interval(10000);
    const text = 'Calling getAlertList Ajax';
    this.subscription = source.subscribe(val => this.opensnack(text));



       this.registerService.getData('get','getalertlist','').subscribe((data) => {
            if(data.result == "Success"){
              this.dataArray = data.alertList;
            console.log(this.dataArray);
            console.log(data.alertList[0]);
           // console.log(this.dataArray.alertId);
           // console.log(data.readflag);

            }else if(data.result == "Failure"){
              alert(data.errorMsg);
            }
            
        },err =>{ console.log("error");})

    }

 opensnack(text) {
    // I've just commented this so that you're not bombarded with an alert.
    console.log(text);

       this.registerService.getData('get','getalertlist','').subscribe((data) => {
            if(data.result == "Success"){
              this.dataArray = data.alertList;
            console.log(this.dataArray);
            console.log(data.alertList[0]);
           // console.log(this.dataArray.alertId);
           // console.log(data.readflag);

            }else if(data.result == "Failure"){
              alert(data.errorMsg);
            }
            
        },err =>{ console.log("error");})
  }

  ngOnDestroy() {
    // For method 1
    this.subscription && this.subscription.unsubscribe();

  }

}
