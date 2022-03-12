import { Component , OnInit } from '@angular/core';
import { FormGroup, FormBuilder , FormControl, Validators } from '@angular/forms';  //step 1 import formgroup formcontrop formbuilder
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  checkOut: FormGroup   //step 3-> give same formgroup name as in the template


  constructor(private formBuilder:FormBuilder){
    // this.checkOut=formBuilder.group({ //building the form using formBuilder
    //   mail: new FormControl(),     // in formbuilder creating the form elements
    //   pass:new FormControl(),            //all should be same as your form
    //   checkB: new FormControl() //we can do this dynamically also
      
    // })

    this.checkOut=formBuilder.group({ //building the form using formBuilder
      mail: ['' ,[Validators.required , Validators.email] ] ,    // in formbuilder creating the form elements
      pass:  ['' , [ Validators.minLength(7) ,Validators.maxLength(15), Validators.required   ]] ,         //all should be same as your form
      checkB: ['' , Validators.requiredTrue] , //we can do this dynamically also
      
    })
      

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  check(){
    console.log(this.checkOut);
    console.log(this.checkOut.value);
  }
  
}
