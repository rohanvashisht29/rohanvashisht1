import { Component, OnInit } from '@angular/core';


import {FormsModule} from '@angular/Forms';
import {NgModule,Pipe} from '@angular/core';
import {ReactiveFormsModule,FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { __values } from 'tslib';


@Component({
  selector: 'app-message-second',
  templateUrl: './message-second.component.html',
  styleUrls: ['./message-second.component.css']
})
export class MessageSecondComponent implements OnInit {

  constructor() { }

    myForm: FormGroup;
    piwikSingleFile: FormControl;
    finalMultipleFile: FormControl;
    piwikKey: FormControl;
    finalKey: FormControl;
    key1: FormControl;
    count1: FormControl;
    intersection1: FormControl;
    key2: FormControl;
    count2: FormControl;
    intersection2: FormControl;
    key3: FormControl;
    count3: FormControl;
    intersection3: FormControl;
    

    error:boolean = false;   //error a boolean node for validation
    errorMessage:any = null;  //errormessage to store message for validation




  ngOnInit() {
    this.createFormControls(); //creating a function to check validation.
  }

  createFormControls(){
    this.piwikSingleFile= new FormControl('',Validators.required)  //chack the validation if firstName is empty then it will set this.firstName = undefined
    if (this.piwikSingleFile! =undefined){
        this.createForm(); // if it is not undefined then we can proceed to submit the form other wise it will not hit the submit function. 
    }

    this.finalMultipleFile = new FormControl('', Validators.required)
    if (this.finalMultipleFile!=undefined){
      this.createForm();
    }

    this.piwikKey = new FormControl('', Validators.required)
    if(this.piwikKey!=undefined){
      this.createForm();
    }

    this.finalKey = new FormControl('', Validators.required)
    if(this.finalKey!= undefined){
      this.createForm();
    }
   
    this.key1 = new FormControl('', Validators.required)
    if (this.key1!= undefined){
      this.createForm();
    }

    this.count1= new FormControl('', Validators.required)
    if(this.count1!= undefined){
      this.createForm();
    }

    this.intersection1 = new FormControl('', Validators.required)
    if(this.intersection1!= undefined){
      this.createForm();
    }
    
    this.key2 = new FormControl('', Validators.required)
    if (this.key2!= undefined){
      this.createForm();
    }

    this.count2= new FormControl('', Validators.required)
    if(this.count2!= undefined){
      this.createForm();
    }

    this.intersection2 = new FormControl('', Validators.required)
    if(this.intersection2!= undefined){
      this.createForm();
    }

    this.key3 = new FormControl('', Validators.required)
    if (this.key3!= undefined){
      this.createForm();
    }

    this.count3= new FormControl('', Validators.required)
    if(this.count3!= undefined){
      this.createForm();
    }

    this.intersection3 = new FormControl('', Validators.required)
    if(this.intersection3!= undefined){
      this.createForm();
    }

}

createForm(){
    this.myForm = new FormGroup({
        piwikSingleFile: new FormControl(),
        finalMultipleFile: new FormControl(),
        piwikKey: new FormControl(),
        finalKey: new FormControl(),
        key1: new FormControl(),
        count1: new FormControl(),
        intersection1: new FormControl(),
        key2: new FormControl(),
        count2: new FormControl(),
        intersection2: new FormControl(),
        key3: new FormControl(),
        count3: new FormControl(),
        intersection3: new FormControl()
    })
}

onSubmit(){
      if(this.myForm.value.piwikSingleFile){
        this.error=false;
        this.errorMessage=null;
        this.createFormControls();
        console.log(this.myForm.value);
      }
      else{
        this.error= true;
        this.errorMessage = "This field is required" ;
      }

      if(this.myForm.value.finalMultipleFile){
        this.error=false;
        this.errorMessage=null;
        this.createFormControls();
        console.log(this.myForm.value);
      }
      else{
        this.error= true;
        this.errorMessage = "This field is required" ;
      }

      if(this.myForm.value.piwikKey){
        this.error=false;
        this.errorMessage=null;
        this.createFormControls();
        console.log(this.myForm.value);
      }
      else{
        this.error= true;
        this.errorMessage = "This field is required" ;
      }

      if(this.myForm.value.finalKey){
        this.error=false;
        this.errorMessage=null;
        this.createFormControls();
        console.log(this.myForm.value);
      }
      else{
        this.error= true;
        this.errorMessage = "This field is required" ;
      }

      if(this.myForm.value.key1){
        this.error= false;
        this.errorMessage= null; 
        console.log(this.myForm.value);
        this.createFormControls();
      }
      else{
        this.error= true;
        this.errorMessage="This field is required"
      }

      if(this.myForm.value.count1){
        this.error= false;
        this.errorMessage= null;
        console.log(this.myForm.value);
        this.createFormControls();
      }
      else{
        this.error= true;
        this.errorMessage="This field is required"
      }

      if(this.myForm.value.intersection1){
        this.error= false;
        this.errorMessage= null;
        console.log(this.myForm.value);
        this.createFormControls();
      }
      else{
        this.error= true;
        this.errorMessage="This field is required"
      }

      if(this.myForm.value.key2){
        this.error= false;
        this.errorMessage= null; 
        console.log(this.myForm.value);
        this.createFormControls();
      }
      else{
        this.error= true;
        this.errorMessage="This field is required"
      }

      if(this.myForm.value.count2){
        this.error= false;
        this.errorMessage= null;
        console.log(this.myForm.value);
        this.createFormControls();
      }
      else{
        this.error= true;
        this.errorMessage="This field is required"
      }

      if(this.myForm.value.intersection2){
        this.error= false;
        this.errorMessage= null;
        console.log(this.myForm.value);
        this.createFormControls();
      }
      else{
        this.error= true;
        this.errorMessage="This field is required"
      }

      if(this.myForm.value.key3){
        this.error= false;
        this.errorMessage= null; 
        console.log(this.myForm.value);
        this.createFormControls();
      }
      else{
        this.error= true;
        this.errorMessage="This field is required"
      }

      if(this.myForm.value.count3){
        this.error= false;
        this.errorMessage= null;
        console.log(this.myForm.value);
        this.createFormControls();
      }
      else{
        this.error= true;
        this.errorMessage="This field is required"
      }

      if(this.myForm.value.intersection3){
        this.error= false; 
        this.errorMessage= null;
        console.log(this.myForm.value);
        this.createFormControls();
      }
      else{
        this.error= true;
        this.errorMessage="This field is required"
      }































}





}