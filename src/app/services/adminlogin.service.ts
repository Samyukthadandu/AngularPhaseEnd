import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {adminUrl} from 'src/app/config/api';
import{Admin} from 'src/app/models/admin';
import { AnyNaptrRecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

 /* adminUserName:string="sam";
  adminPassword:string="55555"

  adminCredentials(un:any,pw:any){
     this.adminUserName=un;
     this.adminPassword=pw;
     
  }*/
  constructor(private http:HttpClient) { }

 /* getAdminDetails():Observable<Admin[]>{
    //TODO:Populate products from an API and return an observable
    return this.http.get<Admin[]>(adminUrl);

  }
  resetPwd(id:any,data:any){
    console.log(data);
    return this.http.put(adminUrl,data);
  }*/


 /* validateUser(data:any):Observable<any>{
    console.log("I'm in server");
    return this.http.post(adminUrl,data)
  }
}*/
 /* getAdmin(){
    console.log("hello");
    return this.http.get(adminUrl);
    
  }
  updateAdminData(id:any,data:any){
    return this.http.put( adminUrl+id, data );
  }

  }*/
  adminUserName:string="sam";
  adminPassword:string="55555"

  adminCredentials(un:any,pw:any,f:any){
    if(f==true){
    this.adminUserName=un;
    this.adminPassword=pw;
    }else{
    return(this.adminUserName, this.adminPassword);
    }
 }
  
  validateUser(username:any,password:any,flag:any){   
   if(flag==true){
    this.adminCredentials(username,password,flag);
    alert("password reset successful");
    return true;
   }else{
    this.adminCredentials(username,password,flag);
    if(username==username && password==password)
    {
        return true;
    }
   else{
    return false;
    }
   }

   
  }
}
 /* getPwd(adminID:number){
    return this.http.get(adminUrl+adminID);
  }*/
/*  resetPwd(aname:any,apassword:any){
   
  }*/

