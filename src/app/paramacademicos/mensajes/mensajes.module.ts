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
import { MensajesComponent } from './mensajes.component';
import { MensajesformularioComponent } from './mensajesformulario/mensajesformulario.component';
import { MensajesvistaComponent } from './mensajesvista/mensajesvista.component';
import { TiposbloqueoComponent } from './tiposbloqueo/tiposbloqueo.component';
import { MatRadioModule } from '@angular/material/radio';


const routes: Routes =[
  {path:"ParametrosAcademicos/Mensajes/Registrar", component: MensajesformularioComponent},
  {path:"ParametrosAcademicos/Mensajes", component: MensajesvistaComponent},
  {path:"ParametrosAcademicos/TiposBloqueo", component: TiposbloqueoComponent}
]


@NgModule({
  declarations: [
    MensajesComponent,
    MensajesformularioComponent,
    MensajesvistaComponent,
    TiposbloqueoComponent
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
    MatRadioModule,
    RouterModule.forRoot(routes)
  ]
})
export class MensajesModule { }
