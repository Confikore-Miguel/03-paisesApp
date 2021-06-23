import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'

import { PaisesService } from '../../services/paises.service';
import { PaisesREST } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styles: [
    `
    .flag{
      width:400px;
    }
    `
  ]
})
export class VerDetalleComponent implements OnInit {

  pais!:PaisesREST;

  constructor( 
    private activateRoute: ActivatedRoute,
    private paisService: PaisesService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
        .pipe(
          switchMap( (param) => this.paisService.buscarPorCodigo( param.id ) ),
          tap( console.log )
        )
        .subscribe( pais  => this.pais = pais)
  }

}
