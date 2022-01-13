import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 userName:any;
 userPassword:any;



  users:any=[
 {
    "name": "lilly",
    "password":"apples"
  },
 {
  "name": "roseMary",
  "password":"banana"

 },
 {
  "name": "sunflower",
  "password":"orange"

  },
  {
  "name": "jasmine",
  "password":"grapes"

  },
  {
  "name": "tulip",
  "password":"melon"

  }
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

dashboard(value:any){
  console.log(value);
  this.router.navigate(['/dashboard']);
}
}

  // for (var user of this.users)
  // {
  //   if (console.log(value)==(user.name && user.password)){
  //     }
  //     else{
  //       alert('sorry user not registered');
  //     }
  // }







