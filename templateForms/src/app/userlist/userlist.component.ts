import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  userDetails = [
    {
      "name": "Abinav",
      "email": "abinav@gmail.com",
        "city": "chennai",
        "company": "ABC",
        "isEdit":false,
    },
    {
      "name": "Abinesh",
      "email": "abc@gmail.com",
        "city": "chennai",
        "company": "EFG",
        "isEdit":false,
    },
    {
      "name": "samir",
      "email": "xyz@gmail.com",
        "city": "chennai",
        "company": "www",
        "isEdit":false,
    },
    {
      "name": "Abinesh",
      "email": "lmn@gmail.com",
        "city": "chennai",
        "company": "index",
        "isEdit":false,
    },
    {
      "name": "robert",
      "email": "bca@gmail.com",
        "city": "chennai",
        "company": "oop",
        "isEdit":false,
    },
   
   
  ]



  constructor() { }

  ngOnInit(): void {
  }

doEdit(userDetail:any){
  userDetail.isEdit=true;
}
cancel(userDetail:any){
  userDetail.isEdit=false;

}
save(userDetail:any){

  userDetail.isEdit=false;
  alert("updated successfully")
}
}

