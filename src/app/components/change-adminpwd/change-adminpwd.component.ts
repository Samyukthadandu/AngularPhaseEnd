import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {AdminloginService} from 'src/app/services/adminlogin.service';
import { ActivatedRoute } from '@angular/router';
import { adminUrl } from 'src/app/config/api';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-change-adminpwd',
  templateUrl: './change-adminpwd.component.html',
  styleUrls: ['./change-adminpwd.component.css']
})
export class ChangeAdminpwdComponent implements OnInit {
id:number;
  constructor(private adminserv : AdminloginService ,public rtr:Router ) { }

  adminData:Admin[] =[];
  
  pwd = new FormGroup({   
    adminName: new FormControl(''),
    adminPwd: new FormControl('')    
    } );

    
  ngOnInit(): void {
    
  }

  changePwd(){
    let flag:boolean = true; 
     var res =this.adminserv.validateUser(this.pwd.value["adminName"],this.pwd.value["adminPwd"],flag);
     if(res){
       this.rtr.navigate(["adddelete"]);

     }else{
       alert("NotSuccessfull");
     }
  
  }
   /* changePwd(){
      this.adminserv.updateAdminData(this.id,this.pwd.value ).subscribe( ( result ) => {
        console.log( result );
        //this.message=true;
      } );
    };*/
  
   
  }
  

  
    
  

  
