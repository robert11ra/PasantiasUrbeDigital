import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientoDptoEmpresasModule } from './mantenimiento-dpto-empresas/mantenimiento-dpto-empresas.module';
import { MantenimientoEmpresasModule } from './mantenimiento-empresas/mantenimiento-empresas.module';
import { MantenimientoGrupoEmpresasModule } from './mantenimiento-grupo-empresas/mantenimiento-grupo-empresas.module';
import { MantenimientoSucursalesModule } from './mantenimiento-sucursales/mantenimiento-sucursales.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    MantenimientoDptoEmpresasModule,
    MantenimientoEmpresasModule,
    MantenimientoGrupoEmpresasModule,
    MantenimientoSucursalesModule,
    RouterModule
  ],
  exports:[
    MantenimientoDptoEmpresasModule,
    MantenimientoEmpresasModule,
    MantenimientoGrupoEmpresasModule,
    MantenimientoSucursalesModule
  ]
})
export class EmpresasModule { }
