import { Component, ViewChild, OnInit } from '@angular/core';
import { grupoempresa } from 'src/app/empresas/empresa';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { MantenimientoEmpresasComponent } from '../mantenimiento-empresas.component';

@Component({
  selector: 'app-mantenimiento-empresas-vista',
  templateUrl: './mantenimiento-empresas-vista.component.html',
  styleUrls: ['./mantenimiento-empresas-vista.component.css']
})
export class MantenimientoEmpresasVistaComponent extends MantenimientoEmpresasComponent implements OnInit {

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
    this.empresasService.modifyAux = false;
  }

    
  toggleEditButtons(): void{
    if(this.displayedColumns.length > 3 && this.displayedColumns[3] == 'modificar'){
      this.displayedColumns = ['rif', 'pcode','nombre'];
    }
    else{    
      this.displayedColumns =['rif', 'pcode','nombre', 'modificar'];
    }
  }
  
  toggleDeleteButtons(): void{
    if(this.displayedColumns.length > 3 && this.displayedColumns[3] == 'eliminar'){
      this.displayedColumns = ['rif', 'pcode','nombre'];
    }
    else{
      this.displayedColumns =['rif', 'pcode','nombre' ,'eliminar'];
    }
  }
  
  navigateModify(id: number){
    this.empresasService.modifyEmpAuxId = id;
    this.empresasService.modifyAux = true;
    this.register();
  }

  removeRegister(id: number){
    this.empresasService.removeEmpresa(id);
    this.refreshData();
  }


  register(): void{
    this.router.navigate(['Empresas/Registrar'])
  }
}
