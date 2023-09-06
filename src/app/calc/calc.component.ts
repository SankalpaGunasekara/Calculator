import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'// to access input form

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit{ //NgOnInit() method will be initiated in the begining to 

  constructor(){

  }

  userInput:any;
  ngOnInit(): void {
      this.userInput = new FormGroup({
        text:new FormControl()
      })
  }
}
