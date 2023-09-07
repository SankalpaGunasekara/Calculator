import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'// to access input form

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit { //NgOnInit() method will be initiated in the begining to 

  constructor() {

  }

  InputString: any;
  ngOnInit(): void {
    this.InputString = new FormGroup({
      text: new FormControl()
    })


  }

  btnClick(button: any) { // this will control the button behaviours
    let btnText = button.textContent // Get the text content of the clicked button and store it in the variable btnText.
    let currentInput = this.InputString.controls.text.value
    if (currentInput != null) {



      // if (this.InputString.controls.text.value === '+') { // Test
      //   this.InputString.controls.text.setValue("Pass")
      // }



      this.InputString.controls.text.setValue(this.InputString.controls.text.value + btnText)
    }
    else {

      this.InputString.controls.text.setValue(btnText)

    }

  }

  clearInput() {
    this.InputString.controls.text.setValue("")
  }

  calculate(): void {
    const inputText = this.InputString.controls.text.value;
  
    if (inputText) {
      try {
        const output = eval(inputText);
        this.InputString.controls.text.setValue(output);
      } catch (error) {
        this.InputString.controls.text.setValue('Error!')
        // Handle invalid input or other errors here
      }
    }
  }
  
}
