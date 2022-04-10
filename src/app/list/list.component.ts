import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from 'src/data/countries';
import { SharedService } from '../Service/ser.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private service:SharedService) { }
  paysFilter: string="";
  PaysProductWithoutFilter: Array<any> = COUNTRIES;

  lesPays: Array<any> = COUNTRIES;

  ngOnInit(): void { 

  }


  addToDetails(item : any){
    this.service.addToDetail(item);
  }
  
  FilterFn(){
    var PaysFilterVar = this.paysFilter;
  
    this.lesPays= this.PaysProductWithoutFilter.filter(function (fl:any){
  return fl.name.common.toString().toLowerCase().includes(
    PaysFilterVar.toString().trim().toLowerCase())
    });
  }

}
