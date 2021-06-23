import { Component, Input, OnInit } from '@angular/core';
import { PaisesREST } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [
    `
    .flag{
    width: 50px;
    }
    `
  ]
})
export class TablaComponent implements OnInit {


  @Input('paises:child') paises:PaisesREST[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
