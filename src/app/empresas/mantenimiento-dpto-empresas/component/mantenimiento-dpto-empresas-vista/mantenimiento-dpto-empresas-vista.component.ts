import { Component, ViewChild, OnInit } from '@angular/core';
import { Empresa, grupoempresa, Sucursal, Departamento } from 'src/app/empresas/empresa';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { MantenimientoDptoEmpresasComponent } from '../mantenimiento-dpto-empresas.component';
@Component({
  selector: 'app-mantenimiento-dpto-empresas-vista',
  templateUrl: './mantenimiento-dpto-empresas-vista.component.html',
  styleUrls: ['./mantenimiento-dpto-empresas-vista.component.css']
})
export class MantenimientoDptoEmpresasVistaComponent extends MantenimientoDptoEmpresasComponent implements OnInit {

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

  fetchSucursales(emp: Empresa): void {
    this.sucSelected = undefined!;
    this.sucursalesList = emp.sucursales;
  }

  loadDepData(suc: Sucursal): void{
    this.displayedColumns = ['name', 'tlfext','email'];
    this.dataSource = new MatTableDataSource<Departamento>(suc.dpts);
  }

  toggleEditButtons(): void{
    if(this.displayedColumns.length > 3 && this.displayedColumns[3] == 'modificar'){
      this.displayedColumns = ['name', 'tlfext','email'];
    }
    else{    
      this.displayedColumns =['name', 'tlfext','email', 'modificar'];
    }
  }
  
  toggleDeleteButtons(): void{
    if(this.displayedColumns.length > 3 && this.displayedColumns[3] == 'eliminar'){
      this.displayedColumns = ['name', 'tlfext','email'];
    }
    else{
      this.displayedColumns =['name', 'tlfext','email' ,'eliminar'];
    }
  }
  
  navigateModify(id: number){
    this.empresasService.modifyDepAuxId = id;
    this.empresasService.modifyAux = true;
    this.register();
  }

  removeRegister(id: number){
    this.empresasService.auxDepDataSource = this.empresasService.removeDepartment(id, this.sucSelected.id, this.empSelected.id);
    this.refreshData();
  }


  register(): void{
    this.empresasService.selectedEmpId = this.empSelected.id;
    this.empresasService.selectedSucId = this.sucSelected.id;
    console.log(this.empresasService.selectedEmpId  , " register ", this.empresasService.selectedSucId);
    this.router.navigate(['Departamentos/Registrar'])
    
  }
}
