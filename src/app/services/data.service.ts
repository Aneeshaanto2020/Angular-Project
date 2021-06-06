import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  account_details:any ={

    1000: { uname: "ajay", accno: 1000, password: "ajay123", amount: 5000 },
    1001: { uname: "vijay", accno: 1001, password: "vijay123", amount: 3000 },
    1002: { uname: "anu", accno: 1002, password: "anu123", amount: 7000 },
    1003: { uname: "ravi", accno: 1003, password: "ravi123", amount: 10000 },
  }
  


  constructor() { }

  register(uname:any,accno:any,password:any){

    let dataset = this.account_details;

    if(accno in dataset){

      
      return false;
    }
    else{
      this.account_details[accno]={
        uname,
        accno,
        password,
        amount:0
      }
      
      return true;
    }
  }

  login(accno:any,pswd:any){

    let dataset=this.account_details;

    if(accno in dataset){

      if(pswd==dataset[accno]["password"]){

        return true;

        
      }
      else{
        alert("Incorrect password");
        return false;
      }
    }
    else{
      alert("Invalid Account");
      return false;
    }
  }

  deposit(accno:any,pswd:any,amt:any){

    var amount = parseInt(amt)

    let dataset = this.account_details;
    if(accno in dataset){

      if(pswd==dataset[accno]["password"]){


        dataset[accno]["amount"] += amount;
        return dataset[accno]["amount"];
      }
      else{
        alert("Incorrect Password");
        return false;
      }
  }
  else{
      alert("Invalid Account");
      return false;
    }
  }

  withdraw(accno:any,pswd:any,amt:any){

    var amount = parseInt(amt)

    let dataset = this.account_details;
    if(accno in dataset){

      if(pswd==dataset[accno]["password"]){

        if(amount<dataset[accno]["amount"]){
          dataset[accno]["amount"] -= amount;
        return dataset[accno]["amount"];

        }
      else{
        alert("Insufficient balance");
        return false;
        
      }
     }
      else{
        alert("Incorrect Password");
      return false;
      }
  }
  else{
      alert("Invalid Account");
      return false;
    }
  }
}


