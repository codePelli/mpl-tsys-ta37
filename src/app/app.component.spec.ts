import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './App.component.html',
  styleUrls: ['./App.component.css']
})
export class AppComponent{
  expression = '';

  addToExpression(value: string): void{
    this.expression += value;
  }

  clear(): void{
    this.expression = '';
  }

  calculate(): void{
    try{
      const result = Function(`'use strict'; return (${this.expression})`)();
      this.expression = result.toString();
    } catch (error) {
      this.expression = 'Error';
    }
  }
}