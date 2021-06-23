import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent {

  @Output() onTermino:EventEmitter<string>= new EventEmitter;

  termino:string =''

  constructor() { }

  buscar( termino:string){    
    this.onTermino.emit(termino);
  }
}
