import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParamacademicosComponent } from './paramacademicos.component';
import { MensajesModule } from './mensajes/mensajes.module';
import { DocumentosModule } from './documentos/documentos.module';
import { AcademicoModule } from './academico/academico.module';

@NgModule({
  declarations: [
    ParamacademicosComponent
  ],
  imports: [
    CommonModule,
    MensajesModule,
    DocumentosModule,
    AcademicoModule
  ]
})
export class ParamacademicosModule { }
