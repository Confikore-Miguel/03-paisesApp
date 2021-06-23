import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerDetalleComponent } from './pages/ver-detalle/ver-detalle.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { InputComponent } from './components/input/input.component';
import { TablaComponent } from './components/tabla/tabla.component';

@NgModule({
  declarations: [
    PorPaisComponent, 
    PorCapitalComponent, 
    PorRegionComponent, 
    VerDetalleComponent, InputComponent, TablaComponent
    ],
  exports:[
    PorPaisComponent, 
    PorCapitalComponent, 
    PorRegionComponent, 
    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
