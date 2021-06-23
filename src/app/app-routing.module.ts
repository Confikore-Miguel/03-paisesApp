import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerDetalleComponent } from './pais/pages/ver-detalle/ver-detalle.component';

const routes:Routes =[
    {
        path:'',
        component:PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path:'pais/:id',
        component:VerDetalleComponent
    },
    {
        path:'region',
        component:PorRegionComponent
    },
    {
        path:'capital',
        component:PorCapitalComponent
    },
    {
        path:'**',
        component:PorPaisComponent
    },
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}