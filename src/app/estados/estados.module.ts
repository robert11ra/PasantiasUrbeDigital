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
import { EstadosComponent } from './estados.component';
import { EdoFormularioComponent } from './edo-formulario/edo-formulario.component';
import { EdoVistaComponent } from './edo-vista/edo-vista.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path:'Estados', component: EdoVistaComponent},
  {path:'Estados/Registrar', component: EdoFormularioComponent}
 
]
@NgModule({
  declarations: [
    EstadosComponent,
    EdoFormularioComponent,
    EdoVistaComponent
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
  ],
  exports:[
    EstadosComponent
  ]
})
export class EstadosModule { }
