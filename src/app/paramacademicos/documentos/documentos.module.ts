import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CdkTableModule } from '@angular/cdk/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { DocumentosComponent } from './documentos/documentos.component';
import { ConstanciasComponent } from './constancias/constancias.component';
import { ImprimeplanillaComponent } from './imprimeplanilla/imprimeplanilla.component';

//material
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select'; 
import { RouterModule, Routes } from '@angular/router';


const routes: Routes =[
  {path: "ParametrosAcademicos/Documentos", component: DocumentosComponent},
  {path: "ParametrosAcademicos/Constancias", component: ConstanciasComponent},
  {path: "ParametrosAcademicos/ImprimePlanilla", component: ImprimeplanillaComponent}
];

@NgModule({
  declarations: [
    DocumentosComponent,
    ConstanciasComponent,
    ImprimeplanillaComponent
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
export class DocumentosModule { }
 