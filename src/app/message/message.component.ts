import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {NgModule,Pipe} from '@angular/core';
import {ReactiveFormsModule,FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }

  myform: FormGroup;
  // form:Object = {};
  firstName: FormControl;
  Email: FormControl;
  CompanyName: FormControl;
  Subject: FormControl;
  Message: FormControl;


  error:boolean = false;   //error a boolean node for validation
  errorMessage:any = null;  //errormessage to store message for validation


  ngOnInit() {
    this.createFormControls(); //creating a function to check validation.
  }
 
  createFormControls()
    {
      this.firstName = new FormControl('', Validators.required);  //chack the validation if firstName is empty then it will set this.firstName = undefined
      if(this.firstName  != undefined)
        { 
        this.createForm(); // if it is not undefined then we can proceed to submit the form other wise it will not hit the submit function. 
        }

      this.Email = new FormControl('', Validators.required);  //chack the validation if Email is empty then it will set this.firstName = undefined
      if(this.Email  != undefined)
        { 
        this.createForm(); // if it is not undefined then we can proceed to submit the form other wise it will not hit the submit function. 
        }  
  
      this.CompanyName = new FormControl('', Validators.required);  //chack the validation if CompanyName is empty then it will set this.firstName = undefined
      if(this.CompanyName  != undefined)
        { 
        this.createForm(); // if it is not undefined then we can proceed to submit the form other wise it will not hit the submit function. 
        }
      
      this.Subject = new FormControl('', Validators.required);  //chack the validation if Subject is empty then it will set this.firstName = undefined
      if(this.Subject  != undefined)
        { 
        this.createForm(); // if it is not undefined then we can proceed to submit the form other wise it will not hit the submit function. 
        }
        
      this.Message = new FormControl('', Validators.required);  //chack the validation if Message is empty then it will set this.firstName = undefined
      if(this.Message  != undefined)
        { 
        this.createForm(); // if it is not undefined then we can proceed to submit the form other wise it will not hit the submit function. 
        }

      }
  
  createForm()
    {
      this.myform =new FormGroup({
        firstName: new FormControl(),
        Email: new FormControl(),
        CompanyName: new FormControl(),
        Subject: new FormControl(),
        Message: new FormControl()
      })
    }

  onSubmit() {
    { 
      if(this.myform.value.firstName){   //here we are checking if firstname is filled then
        this.error = false;             //error will be set false 
        this.errorMessage= null;         //erroeMessage is also set null
        console.log(this.myform.value);   //and console will give us the value
        this.createFormControls();        // refresh the form 
      }
      else{
        this.error = true;                            //else error will be true
        this.errorMessage = "This field is required"     //message will be set
      }

      if(this.myform.value.Email){   //here we are checking if Email is filled then
        this.error = false;             //error will be set false 
        this.errorMessage= null;         //erroeMessage is also set null
        console.log(this.myform.value);   //and console will give us the value
        this.createFormControls();        // refresh the form 
      }
      else{
        this.error = true;                            //else error will be true
        this.errorMessage = "This field is required"     //message will be set
      }  
  
      if(this.myform.value.CompanyName){   //here we are checking if CompanyName is filled then
        this.error = false;             //error will be set false 
        this.errorMessage= null;         //erroeMessage is also set null
        console.log(this.myform.value);   //and console will give us the value
        this.createFormControls();        // refresh the form 
      }
      else{
        this.error = true;                            //else error will be true
        this.errorMessage = "This field is required"     //message will be set
      }

      if(this.myform.value.Subject){   //here we are checking if Subject is filled then
        this.error = false;             //error will be set false 
        this.errorMessage= null;         //erroeMessage is also set null
        console.log(this.myform.value);   //and console will give us the value
        this.createFormControls();        // refresh the form 
      }
      else{
        this.error = true;                            //else error will be true
        this.errorMessage = "This field is required"     //message will be set
      }
      
      
      if(this.myform.value.Message){   //here we are checking if Message is filled then
        this.error = false;             //error will be set false 
        this.errorMessage= null;         //erroeMessage is also set null
        console.log(this.myform.value);   //and console will give us the value
        this.createFormControls();        // refresh the form 
      }
      else{
        this.error = true;                            //else error will be true
        this.errorMessage = "This field is required"     //message will be set
      }     


    }
  }

}


