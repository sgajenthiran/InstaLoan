import { Component, OnInit } from '@angular/core';
import { PojoService } from '../services/pojoservice';
import { RegisterService } from '../services/registerservice';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService


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
              private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    console.log(this.pojoService.getloanName());
    if(this.pojoService.getloanName()=='personalLoan'){
    this.title='personalLoan';
      this.personalLoanArray=[
      {
        type: 'text',
        label: 'Your desired loan amount',
        placeholder:'XXX',
        value: ''
      },
      {
        type: 'text',
        label: 'Your Employee Type ',
        placeholder:'XXX',
        value: ''
      },
       {
        type: 'text',
        label: 'Your net monthly income ',
        placeholder:'XXX',
        value: ''
      },{
        type: 'number',
        label: 'Mobile Number',
        placeholder:'XXX',
        value: ''
      },
      {
          type: 'text',
          label: 'Your current city of residence ',
          placeholder:'XXX',
          value: ''
        },
         {
          type: 'text',
          label: 'Salary Received In ',
          placeholder:'XXX',
          value: ''
        },
         {
          type: 'text',
          label: 'Your net monthly income ',
          placeholder:'XXX',
          value: ''
        },{
          type: 'text',
          label: 'Email Address',
          placeholder:'XXX',
          value: ''
        },
        {
          type: 'select',
          label: 'Gender ',
          option: [{"name":"female","value":"female"},{"name":"male","value":"male"}],
          placeholder:'XXX'
          
        },
         {
          type: 'number',
          label: 'Your Pan Card Number',
          placeholder:'XXX',
          value: ''
        }
      ];
    }else if(this.pojoService.getloanName()=='businessLoan'){
    this.title="BusinessLoan";
      this.personalLoanArray=[
      {
          type: 'text',
          label: 'Your desired loan amount',
          placeholder:'1000',
          value: ''
        },
        {
          type: 'select',
          label: 'How are you currently employed ? ',
          placeholder:'XXX',
          option:[{name:"selfEmpBus",value:"Self Employed Business"},{name:"selfEmpPro",value:"Self Employed Professional"}]
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
          type: 'number',
          label: 'Mobile Number ',
          placeholder:'XXX',
          value: ''
        }
      ];
    }else if(this.pojoService.getloanName()=='homeLoan'){
    this.title="HomeLoan";
      this.personalLoanArray=[
      {
        "type": "text",
        "label": "Property cost",
        "name":"loanAmt",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "select",
        "label": "How are you currently employed ? ",
        "placeholder": "XXX",
        "option": [{"name":"empType","value":"Salaried"},{"name":"empType","value":"Self Employed Business"},{"name":"empType","value":"Self Employed Professional"}]
      },
      {
        "type": "text",
        "label": "Total EMI you pay currently ?",
        "name":"Emi",
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
        "type": "text",
        "label": "Email ID",
        "name":"email",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "number",
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
        "label": "Gender ",
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
      this.personalLoanArray=[
      {
        "type": "text",
        "label": "Loan Amount",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "select",
        "label": "How are you currently employed ? ",
        "placeholder": "XXX",
        "option": [{"name":"Salaried","value":"Salaried"},{"name":"selfEmpBus","value":"Self Employed Business"},{"name":"selfEmpPro","value":"Self Employed Professional"}]
      },
      {
        "type": "text",
        "label": "Annual Income",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "text",
        "label": "Your Full Name ",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "text",
        "label": "Email ID",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "number",
        "label": "Mobile Number ",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "number",
        "label": "Your Pan Card Number",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "select",
        "label": "Vechile Type ",
        "placeholder": "XXX",
        "option": [{"name":"Four Wheeler","value":"Four Wheeler"},{"name":"Two Wheeler","value":"Two Wheeler"}]
      },
      {
        "type": "text",
        "label": "Your current city of residence ",
        "placeholder": "XXX",
        "value": ""
      }
    ]
    }else{
    this.title="HomeLoan";
    this.personalLoanArray=[
      {
        "type": "text",
        "label": "Property cost",
        "name":"loanAmt",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "select",
        "label": "How are you currently employed ? ",
        "placeholder": "XXX",
        "option": [{"name":"empType","value":"Salaried"},{"name":"empType","value":"Self Employed Business"},{"name":"empType","value":"Self Employed Professional"}]
      },
      {
        "type": "text",
        "label": "Total EMI you pay currently ?",
        "name":"Emi",
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
        "type": "text",
        "label": "Email ID",
        "name":"email",
        "placeholder": "XXX",
        "value": ""
      },
      {
        "type": "number",
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
        "label": "Gender ",
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
        console.log(data.value);
        let datas = data.value;
        this.ngxService.start(); 
          this.registerService.getData('post','loanDetails',datas).subscribe((data) => {
                  this.ngxService.stop();
                  console.log(data);
                  if(data.result == "Success"){

                  }else if(data.result == "Failure"){
                    alert(data.errorMsg);
                  }
                  
              },err =>{ console.log("error");this.ngxService.stop();})
      }

    }
