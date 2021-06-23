import { Component } from '@angular/core';

import { PaisesREST } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {


  
  termino:string =''
  paises :PaisesREST[]=[];
  hayError: boolean = false;

  constructor( private paisService:PaisesService) { }

  buscar( termino:string){
    this.hayError = false;
    this.termino= termino;
    console.log( termino );
    const result = this.paisService.buscarPorCapital(termino);
    result.subscribe((resp)=>{
      this.paises= resp ;
    },(err)=>{
      this.hayError=true;
      this.paises=[];
      console.log(err);
    })    
  }

}
