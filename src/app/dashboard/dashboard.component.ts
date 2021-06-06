import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accno="";
  pswd="";
  amount="";

  waccno="";
  wpswd="";
  wamount="";

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  deposit(){
    var accno = this.accno;
    var pswd = this.pswd;
    var amount = this.amount;

    const result = this.dataService.deposit(accno,pswd,amount)

    if(result){
      alert("Amount" + amount + "credited successfully and new balance is : "+ result);

    }
  }
  withdraw(){
    var accno = this.waccno;
    var pswd = this.wpswd;
    var amount = this.wamount;

    const result = this.dataService.withdraw(accno,pswd,amount)

    if(result){
      alert("Amount" + amount + "debited successfully and new balance is : "+ result);

    }
    
  }

}
