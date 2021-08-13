import { Component, ViewChild, OnInit } from '@angular/core';
import { grupoempresa } from 'src/app/empresas/empresa';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { MantenimientoGrupoEmpresasComponent } from '../mantenimiento-grupo-empresas.component';

@Component({
  selector: 'app-mantenimiento-grupo-empresas-vista',
  templateUrl: './mantenimiento-grupo-empresas-vista.component.html',
  styleUrls: ['./mantenimiento-grupo-empresas-vista.component.css']
})
export class MantenimientoGrupoEmpresasVistaComponent extends MantenimientoGrupoEmpresasComponent implements OnInit {
 
  @ViewChild(MatTable) table: MatTable<grupoempresa>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  selectedRow?: grupoempresa;

  
  onSelect(row: grupoempresa): void {
    
    if(this.selectedRow == row){
      this.selectedRow = undefined;
    }
    else{
      this.selectedRow = row;
    }
  }

  applyFilter(event: Event){
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }
  ngOnInit(): void {
    console.log(this.dataSource);
  }

}
