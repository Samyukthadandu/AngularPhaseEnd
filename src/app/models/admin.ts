export class Admin {
    adminID:number;
    adminName: String;
    adminPwd:String;

    constructor(adminID=1,adminName:String,adminPwd:String){
        this.adminID=adminID;
        this.adminName=adminName;
        this.adminPwd=adminPwd;
    }
}
