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
import { MantenimientoEmpresasComponent } from './component/mantenimiento-empresas.component';
import { MantenimientoEmpresasFormularioComponent } from './component/mantenimiento-empresas-formulario/mantenimiento-empresas-formulario.component';
import { MantenimientoEmpresasVistaComponent } from './component/mantenimiento-empresas-vista/mantenimiento-empresas-vista.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path:'Empresas', component: MantenimientoEmpresasVistaComponent},
  {path:'Empresas/Registrar', component: MantenimientoEmpresasFormularioComponent}
 
]
@NgModule({
  declarations: [
    MantenimientoEmpresasComponent,
    MantenimientoEmpresasFormularioComponent,
    MantenimientoEmpresasVistaComponent
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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    MantenimientoEmpresasComponent,
    MantenimientoEmpresasFormularioComponent,
    MantenimientoEmpresasVistaComponent
  ]
})
export class MantenimientoEmpresasModule { }
