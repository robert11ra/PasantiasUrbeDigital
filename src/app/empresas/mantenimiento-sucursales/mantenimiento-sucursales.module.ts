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
import { MantenimientoSucursalesComponent } from './component/mantenimiento-sucursales.component';
import { MantenimientoSucursalesFormularioComponent } from './component/mantenimiento-sucursales-formulario/mantenimiento-sucursales-formulario.component';
import { MantenimientoSucursalesVistaComponent } from './component/mantenimiento-sucursales-vista/mantenimiento-sucursales-vista.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path:'Sucursales', component: MantenimientoSucursalesVistaComponent},
  {path:'Sucursales/Registrar', component: MantenimientoSucursalesFormularioComponent}
 
]

@NgModule({
  declarations: [
    MantenimientoSucursalesComponent,
    MantenimientoSucursalesFormularioComponent,
    MantenimientoSucursalesVistaComponent
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
    MantenimientoSucursalesComponent,
    MantenimientoSucursalesFormularioComponent,
    MantenimientoSucursalesVistaComponent
  ]
})
export class MantenimientoSucursalesModule { }
