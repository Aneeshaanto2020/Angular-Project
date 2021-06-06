import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner"

  

  accno="Account number please";
  pswd="";


  constructor(private router:Router, private dataService:DataService) { }

  ngOnInit(): void {
  }
  //pswdChange(event:any){
  // this.pswd=event.target.value
   // console.log(this.pswd);

  //}
  //accChange(event:any){
  //  this.accno=event.target.value
  //  console.log(this.accno);

  //}

  login(){
    
   // console.log(a.value,p.value);
    var accno= this.accno;
    var pswd= this.pswd;

    const result = this.dataService.login(accno,pswd)
    
    if(result){
      alert("Successfully Logged In");
      this.router.navigateByUrl("dashboard")
    }
    
  }
  register(){

    this.router.navigateByUrl("register");
  }

}
