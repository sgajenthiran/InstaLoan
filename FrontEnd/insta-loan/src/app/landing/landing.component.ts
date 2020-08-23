import { Component, OnInit } from '@angular/core';
import { PojoService } from '../services/pojoservice';
import { RegisterService } from '../services/registerservice';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService
import { Router } from '@angular/router';


@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  private title;
  private personalLoanArray;

  /* private bussinessLoanArray=[
	{
      type: 'text',
      label: 'Your desired loan amount',
      placeholder:'1000',
      value: ''
    },
    {
      type: 'text',
      label: 'How are you currently employed ? ',
      placeholder:'XXX',
      value: ''
    },
     {
      type: 'text', 
      label: 'Your gross annual sales / turnover?  ',
      placeholder:'XXX',
      value: ''
    },{
      type: 'text',
      label: 'Your gross annual profit ?',
      placeholder:'XXX',
      value: ''
    },
    {
      type: 'text',
      label: 'Where do you currently reside ? ',
      placeholder:'XXX',
      value: ''
    },
     {
      type: 'text',
      label: 'Email Address  ',
      placeholder:'XXX',
      value: ''
    },
     {
      type: 'number',
      label: 'Mobile Number ',
      placeholder:'XXX',
      value: ''
    }
  ];*/

  constructor(
              private registerService: RegisterService,
              private pojoService: PojoService,
              private ngxService: NgxUiLoaderService,
              private router: Router) { }

  ngOnInit() {
    console.log(this.pojoService.getloanName());
    if(this.pojoService.getloanName()=='personalLoan'){
    this.title='personalLoan';
    this.personalLoanArray=[];
      this.personalLoanArray=[
      {
        type: 'number',
        label: 'Your desired loan amount',
        name:'loanAmt',
        placeholder:'XXX',
        value: ''
      },
      {
        type: 'text',
        label: 'Name',
        name:'name',
        placeholder:'XXX',
        value: ''
      },
      {
        type: 'date',
        label: 'DOB',
        name:'dob',
        placeholder:'XXX',
        value: ''
      },
      {
        type: 'select',
        label: 'Your Employee Type ',
        name:'empType',
        placeholder:'XXX',
          option:[{name:"selfEmpBus",value:"Self Employed Business"},{name:"selfEmpPro",value:"Self Employed Professional"}]
        
      },
       {
        type: 'number',
        label: 'Your annual income ',
         name:'annualIncome',
        placeholder:'XXX',
        value: ''
      },{
        type: 'number',
        label: 'Mobile Number',
        name:'mobile',
        placeholder:'XXX',
        value: ''
      },
      {
          type: 'text',
          label: 'Your current city of residence ',
          placeholder:'XXX',
          name:'city',
          value: ''
        },
         {
          type: 'text',
          label: 'Salary Received In ',
          name:'salaryrecivedBank',
          placeholder:'XXX',
          value: ''
        },
         {
          type: 'number',
          label: 'Your net monthly income ',
          name:'monthlyIncome',
          placeholder:'XXX',
          value: ''
        },{
          type: 'email',
          label: 'Email Address',
          name:'email',
          placeholder:'XXX',
          value: ''
        },
        {
          type: 'select',
          label: 'Gender ',
          name:'gender',
          option: [{"name":"female","value":"female"},{"name":"male","value":"male"}],
          placeholder:'XXX'
          
        },
         {
          type: 'text',
          label: 'Your Pan Card Number',
          name:'panNo',
          placeholder:'XXX',
          value: ''
        }
      ];
    }else if(this.pojoService.getloanName()=='businessLoan'){
    this.title="BusinessLoan";
    this.personalLoanArray=[];
      this.personalLoanArray=[
      {
          type: 'number',
          label: 'Your desired loan amount',
          name:'loanAmt',
          placeholder:'1000',
          value: ''
        },
        {
        type: 'text',
          label: 'Name',
          name:'name',
          placeholder:'1000',
          value: ''
        },
        {
          type: 'select',
          label: 'How are you currently employed ? ',
          name:'empType',
          placeholder:'XXX',
          option:[{name:"selfEmpBus",value:"Self Employed Business"},{name:"selfEmpPro",value:"Self Employed Professional"}]
        },
         {
          type: 'number',
          label: 'Your gross annual sales / turnover?  ',
          name:'annualIncome',
          placeholder:'XXX',
          value: ''
        },{
          type: 'text',
          label: 'Your gross annual profit ?',
          name:'',
          placeholder:'XXX',
          value: ''
        },
        {
          type: 'text',
          label: 'Where do you currently reside ? ',
          name:'city',
          placeholder:'XXX',
          value: ''
        },
         {
          type: 'number',
          label: 'Mobile Number ',
          name:'mobile',
          placeholder:'XXX',
          value: ''
        },

         {
          type: 'email',
          label: 'Email ID ',
          name:'email',
          placeholder:'XXX',
          value: ''
        },
        {
        type: 'text',
          label: 'PanNo',
          name:'panNo',
          placeholder:'1000',
          value: ''
        }
      ];
    }else if(this.pojoService.getloanName()=='homeLoan'){
    this.title="HomeLoan";
    this.personalLoanArray=[];
      this.personalLoanArray=[
      {
        "type": "number",
        "label": "Property cost",
        "name":"loanAmt",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "number",
        "label": "PhoneNo",
        "name":"mobile",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "select",
        "label": "How are you currently employed ? ",
        "name":"empType",
        "placeholder": "XXX",
        "option": [{"name":"empType","value":"Salaried"},{"name":"empType","value":"Self Employed Business"},{"name":"empType","value":"Self Employed Professional"}]
      },
      {
        "type": "number",
        "label": "Total EMI you pay currently ?",
        "name":"Emi",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "number",
        "label": "Annual Income",
        "name":"annualIncome",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "text",
        "label": "Your Full Name ",
        "name":"name",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "email",
        "label": "Email ID",
        "name":"email",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "date",
        "label": "DOB ",
        "name":"dob",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "number",
        "label": "Your Pan Card Number",
        "name":"panNo",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "select",
        "label": "Gender",
        "name":"sex",
        "option": [{"name":"female","value":"female"},{"name":"male","value":"male"}],
        "placeholder": "XXX"
      },
      {
        "type": "text",
        "label": "Your current city of residence ",
        "name":"city",
        "placeholder": "XXX",
        "value": ""
      }
    ]

    }else if(this.pojoService.getloanName()=='carLoan'){
      this.title="CarLoan";
      this.personalLoanArray=[];
      this.personalLoanArray=[
      {
        "type": "number",
        "label": "Loan Amount",
        "name":"loanAmt",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "select",
        "label": "How are you currently employed ? ",
        "name":"empType",
        "placeholder": "XXX",
        "option": [{"name":"Salaried","value":"Salaried"},{"name":"selfEmpBus","value":"Self Employed Business"},{"name":"selfEmpPro","value":"Self Employed Professional"}]
      },
      {
        "type": "number",
        "label": "Annual Income",
        "name":"annualIncome",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "text",
        "label": "Your Full Name ",
        "name":"name",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "email",
        "label": "Email ID",
        "name":"email",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "number",
        "label": "Mobile Number ",
        "name":"mobile",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "text",
        "label": "Your Pan Card Number",
        "name":"panNo",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "select",
        "label": "Vechile Type ",
        "name":"vechileType",
        "placeholder": "XXX",
        "option": [{"name":"Four Wheeler","value":"Four Wheeler"},{"name":"Two Wheeler","value":"Two Wheeler"}]
      },
      {
        "type": "text",
        "label": "Your current city of residence ",
        "name":"city",
        "placeholder": "XXX",
        "value": ""
      }
    ]
    }else{
    this.title="HomeLoan";
    this.personalLoanArray=[];
    this.personalLoanArray=[
      {
        "type": "number",
        "label": "Property cost",
        "name":"loanAmt",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "number",
        "label": "PhoneNo",
        "name":"mobile",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "select",
        "label": "How are you currently employed ? ",
        "name":"empType",
        "placeholder": "XXX",
        "option": [{"name":"empType","value":"Salaried"},{"name":"empType","value":"Self Employed Business"},{"name":"empType","value":"Self Employed Professional"}]
      },
      {
        "type": "number",
        "label": "Total EMI you pay currently ?",
        "name":"Emi",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "number",
        "label": "Annual Income",
        "name":"annualIncome",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "text",
        "label": "Your Full Name ",
        "name":"name",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "email",
        "label": "Email ID",
        "name":"email",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "date",
        "label": "DOB ",
        "name":"dob",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "number",
        "label": "Your Pan Card Number",
        "name":"panNo",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "select",
        "label": "Gender",
        "name":"sex",
        "option": [{"name":"female","value":"female"},{"name":"male","value":"male"}],
        "placeholder": "XXX"
      },
      {
        "type": "text",
        "label": "Your current city of residence ",
        "name":"city",
        "placeholder": "XXX",
        "value": ""
      }
    ]

    }
     
      

      }
      onClickSubmit(data:any){
      this.ngxService.start();
        console.log(data.value+"****"+this.title);
        let datas = data.value;
        let datasplit = {};
for(let key in datas){
var tempkey = key.split("_")[0];
var typeOfLoan='typeOfLoan';
datasplit[tempkey]=datas[key];
datasplit[typeOfLoan]=this.title;
}

console.log(datasplit);
         
          this.registerService.getData('post','loanDetails',datasplit).subscribe((data) => {
                  this.ngxService.stop();
                  console.log(data);
                  if(data.result == "Success"){
                    this.router.navigate(['/home']);
                  }else if(data.result == "Failure"){
                    alert(data.errorMsg);
                  }
                  
              },err =>{ console.log("error");this.ngxService.stop();})
      }

    }
