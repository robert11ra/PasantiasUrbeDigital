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
import { RouterModule, Routes } from '@angular/router';
import { MantenimientoPeriodoComponent } from './mantenimiento-periodo/mantenimiento-periodo.component';
import { MantenimientoActividadesComponent } from './mantenimiento-actividades/mantenimiento-actividades.component';
import { MantenimientoCalendarioComponent } from './mantenimiento-calendario/mantenimiento-calendario.component';
import { MantenimientoTipoyperiodoComponent } from './mantenimiento-tipoyperiodo/mantenimiento-tipoyperiodo.component';
import { MantenimientoAcademicoComponent } from './mantenimiento-academico/mantenimiento-academico.component';
import { MantenimientoTipoperioyhorarioComponent } from './mantenimiento-tipoperioyhorario/mantenimiento-tipoperioyhorario.component';
import { MantenimientoPeriodosComponent } from './mantenimiento-periodos/mantenimiento-periodos.component';


// Al declarar el componente, ponen su nombre luego de "component:" y descomentan esto
const routes: Routes =[
  {path:"ParametrosAcademicos/TipoPeriodo", component: MantenimientoPeriodoComponent},
  {path:"ParametrosAcademicos/Actividades", component: MantenimientoActividadesComponent},
  {path:"ParametrosAcademicos/Calendario", component: MantenimientoCalendarioComponent},
  {path:"ParametrosAcademicos/Horario", component: MantenimientoTipoperioyhorarioComponent},
  {path:"ParametrosAcademicos/Academico", component: MantenimientoAcademicoComponent},
  {path:"ParametrosAcademicos/Periodos", component:MantenimientoPeriodosComponent}
];

@NgModule({
  declarations: [
    MantenimientoPeriodoComponent,
    MantenimientoActividadesComponent,
    MantenimientoCalendarioComponent,
    MantenimientoTipoyperiodoComponent,
    MantenimientoAcademicoComponent,
    MantenimientoTipoperioyhorarioComponent,
    MantenimientoPeriodosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
  ]
})
export class AcademicoModule { }
