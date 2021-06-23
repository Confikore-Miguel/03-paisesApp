import { Component } from '@angular/core';

import { PaisesService } from '../../services/paises.service';
import { PaisesREST } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {


  termino:string =''
  paises :PaisesREST[]=[];
  hayError: boolean = false;

  constructor( private paisService:PaisesService) { }

  buscar( termino:string){
    
    this.hayError= false;
    this.termino = termino;
    console.log( termino );
    const result = this.paisService.buscarPorPais(termino);
    result.subscribe((resp)=>{
      this.paises= resp ;
    },(err)=>{
      this.hayError=true;
      console.log(err);
    })    
  }
  

}
