import { Component, ViewChild, OnInit } from '@angular/core';
import { Empresa, grupoempresa, Sucursal, Departamento } from 'src/app/empresas/empresa';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { MantenimientoSucursalesComponent } from '../mantenimiento-sucursales.component';
@Component({
  selector: 'app-mantenimiento-sucursales-vista',
  templateUrl: './mantenimiento-sucursales-vista.component.html',
  styleUrls: ['./mantenimiento-sucursales-vista.component.css']
})
export class MantenimientoSucursalesVistaComponent extends MantenimientoSucursalesComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<grupoempresa>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  selectedRow?: grupoempresa;

  empSelected: Empresa;
  sucSelected: Sucursal;

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

  loadSucData(emp: Empresa): void{
    this.displayedColumns = ['name', 'status'];
    this.dataSource = new MatTableDataSource<Sucursal>(emp.sucursales);
  }

  toggleEditButtons(): void{
    if(this.displayedColumns.length > 2 && this.displayedColumns[2] == 'modificar'){
      this.displayedColumns = ['name', 'status'];
    }
    else{    
      this.displayedColumns =['name', 'status', 'modificar'];
    }
  }
  
  toggleDeleteButtons(): void{
    if(this.displayedColumns.length > 2 && this.displayedColumns[2] == 'eliminar'){
      this.displayedColumns = ['name', 'status'];
    }
    else{
      this.displayedColumns =['name', 'status','eliminar'];
    }
  }
  
  navigateModify(id: number){
    this.empresasService.modifyAux = true;
    this.empresasService.selectedSucId = id;
    this.register();
  }

  removeRegister(id: number){
    this.empresasService.auxSucDataSource = this.empresasService.removeSucursal(id, this.empSelected.id);
    this.refreshData();
  }


  register(): void{
    this.empresasService.selectedEmpId = this.empSelected.id;
    this.router.navigate(['Sucursales/Registrar'])
    
  }
}
