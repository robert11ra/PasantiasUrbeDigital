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
import { CsjformularioComponent } from './csjformulario/csjformulario.component'
import { CsjvistaComponent } from './csjvista/csjvista.component';
import { CsjcomunalComponent } from './csjcomunal/csjcomunal.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path:'Consejos', component: CsjvistaComponent},
  {path:'Consejos/Registrar', component: CsjformularioComponent}
]

@NgModule({
  declarations: [
    CsjcomunalComponent,
    CsjformularioComponent,
    CsjvistaComponent
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
    RouterModule.forRoot(routes)
  ],
  exports:[
    CsjcomunalComponent
  ]
})
export class ConsejosModule { }
