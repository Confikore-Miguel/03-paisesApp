import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { PaisesREST } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    ul{
      list-style:none ;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones:string[]=['africa','americas','asia','europe','oceania',];
  paises:PaisesREST[]=[];

  constructor(private paisService:PaisesService) { }

  buscar( termino : string){
    console.log(termino);
    const result = this.paisService.buscarPorRegion(termino);
    result.subscribe((resp)=>{
      this.paises= resp ;
      console.log(this.paises);
    },(err)=>{
      console.log(err);
    })  
  }

}
