import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
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
import { MantenimientoDptoEmpresasComponent } from './component/mantenimiento-dpto-empresas.component';
import { MantenimientoDptoEmpresasFormularioComponent } from './component/mantenimiento-dpto-empresas-formulario/mantenimiento-dpto-empresas-formulario.component';
import { MantenimientoDptoEmpresasVistaComponent } from './component/mantenimiento-dpto-empresas-vista/mantenimiento-dpto-empresas-vista.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path:'Departamentos', component: MantenimientoDptoEmpresasVistaComponent},
  {path:'Departamentos/Registrar', component: MantenimientoDptoEmpresasFormularioComponent}
 
]

@NgModule({
  declarations: [
    MantenimientoDptoEmpresasComponent,
    MantenimientoDptoEmpresasFormularioComponent,
    MantenimientoDptoEmpresasVistaComponent],
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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    MantenimientoDptoEmpresasComponent,
    MantenimientoDptoEmpresasFormularioComponent,
    MantenimientoDptoEmpresasVistaComponent
  ]
})
export class MantenimientoDptoEmpresasModule { }
