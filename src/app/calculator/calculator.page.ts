import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})

export class CalculatorPage implements OnInit {

  username: any;
  history: string = '';
  input: string = '';
  

  constructor() { }
  ngOnInit() {

    this.username = localStorage.getItem('UserGotLogIn');

  }

  clicked(value: string) {
    this.input += value;
  }
  
  addition() {
    this.input += '+';
  }
  subtraction() {
    this.input += '-';
  }
  multiplication() {
    this.input += '*';
  }
  division() {
    this.input += '/';
  }

  clearConsole() {
    this.input = '';
    this.history = '';
  }

  equals() {
    try {
      this.history = this.input;
      this.input = eval(this.input);
    } 
    
    catch (error) {
      this.input = 'Error';
    }
  
  }
  
}