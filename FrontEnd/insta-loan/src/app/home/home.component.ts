import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PojoService } from '../services/pojoservice';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    constructor(private router: Router, private pojoService: PojoService) { }

    ngOnInit() {}
   
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
