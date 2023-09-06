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

  InputString:any;
  ngOnInit(): void {
      this.InputString = new FormGroup({
        text:new FormControl()
      })


  }

  btnClick(button:any){ // this will control the button behaviours

    let btnText = button.textContent // Get the text content of the clicked button and store it in the variable btnText.
    this.InputString.controls.text.setValue(btnText) 

  }
}
