import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from 'src/app/services/adminlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any ={}
 // loginfrm:FormGroup;
  constructor(public srvc:AdminloginService , public rtr:Router) { }

  ngOnInit(): void {
    
  }


  loginfrm = new FormGroup({
    username : new FormControl(),
    password : new FormControl()
  })


 /* CheckUser(){
    if(this.loginfrm.valid){
      this.srvc.validateUser(this.loginfrm.value).subscribe(result =>{
        if(result.success){
          console.log(result);
          alert(result.message);
          this.rtr.navigate(["adddelete"]);
        }else{
        alert(result.message);}
      });
    }
  }*/
  CheckUser(){
     //alert();
     let flag:boolean = false; 
     var res =this.srvc.validateUser(this.loginfrm.value["username"],this.loginfrm.value["password"],flag);
     if(res){
       this.rtr.navigate(["adddelete"]);

     }else{
       alert("Invalid User");
     }
   }

}
