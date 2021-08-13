import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MantenimientoGrupoEmpresasComponent } from './component/mantenimiento-grupo-empresas.component';
import { MantenimientoGrupoEmpresasVistaComponent } from './component/mantenimiento-grupo-empresas-vista/mantenimiento-grupo-empresas-vista.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path:'GrupoEmpresas', component: MantenimientoGrupoEmpresasVistaComponent}
 
]


@NgModule({
  declarations: [
    MantenimientoGrupoEmpresasComponent,
    MantenimientoGrupoEmpresasVistaComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    CdkTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    MantenimientoGrupoEmpresasComponent,
    MantenimientoGrupoEmpresasVistaComponent
  ]
})
export class MantenimientoGrupoEmpresasModule { }
