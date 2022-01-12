import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  data:any=[
 {
    "name": "lilly",
    "password":"apple"
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
onSubmit(value:any){
  console.log(value)
}
dashboard(){
  this.router.navigate(['/dashboard']);
}
}


