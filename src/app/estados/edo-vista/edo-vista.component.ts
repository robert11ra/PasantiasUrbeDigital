import { Component, ViewChild, OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Estado } from '../Estado';
import { EstadosComponent } from '../estados.component';


@Component({
  selector: 'app-edo-vista',
  templateUrl: './edo-vista.component.html',
  styleUrls: ['./edo-vista.component.css']
})
export class EdoVistaComponent extends EstadosComponent implements OnInit {

  @ViewChild(MatTable) csjTable: MatTable<Estado>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  
  ngOnInit(){
    
  };

  edoSeleccionado?: Estado;
  onSelect(estado: Estado): void {
    
    if(this.edoSeleccionado == estado){
      this.edoSeleccionado = undefined;
    }
    else{
      this.edoSeleccionado = estado;
    }

  }

  validateName(name: string): boolean{
    return this.csjFormService.validateName(name);
  }
   
    toggleEditButtons(): void{
      if(this.displayedColumns.length > 3 && this.displayedColumns[3] == 'modificar'){
        this.displayedColumns = ['nombre', 'pais', 'fecode'];
      }
      else{    
        this.displayedColumns =['nombre', 'pais', 'fecode','modificar'];
      }
    }
    
    toggleDeleteButtons(): void{
      if(this.displayedColumns.length > 3 && this.displayedColumns[3] == 'eliminar'){
        this.displayedColumns = ['nombre', 'pais', 'fecode'];
      }
      else{
        this.displayedColumns =['nombre',  'pais', 'fecode' ,'eliminar'];
      }
    }
    
    toggleEditButtonSpecific(): boolean{
      if(this.edoModifyButtons){
        this.edoModifyButtons = false;
        this.edoSeleccionado = undefined;
      }
      else{
        this.edoModifyButtons = true;
      }
      
      return this.edoModifyButtons;
    }

  applyFilter(event: Event, column: string){
    console.log(column);
    switch(column){
      case("name"):{
        this.dataSource.filterPredicate = (data: Estado, filter: string) => {

          return this.csjFormService.findInString(data.name, filter);
         };
        break;
      }
      case("country"):{
        this.dataSource.filterPredicate = (data: Estado, filter: string) => {
          return this.csjFormService.findInString(data.country, filter);
         };
        break;
      }
      case("code"):{
        this.dataSource.filterPredicate = (data: Estado, filter: string) => {
         
          return this.csjFormService.findInString(data.fedEntCode, filter);
         };
        break;
      }
      case("none"):{
        this.dataSource.filterPredicate = (data: Estado, filter: string) => {
          if(this.csjFormService.findInString(data.name, filter)){
            return this.csjFormService.findInString(data.name, filter);
          }
          else if(this.csjFormService.findInString(data.country, filter)){
            return this.csjFormService.findInString(data.country, filter);
          }
          else if(this.csjFormService.findInString(data.fedEntCode, filter)){
            return this.csjFormService.findInString(data.fedEntCode, filter);
          }
          else{
            return false;
          }
         };
        break;
      }
      default:{
        break;
      }
    }
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }

  //Eliminar un registro
  removeRegister(register: Estado): void {
    this.edoList = this.csjFormService.removeRegister(register, this.edoList);
    this.refresh();
  }
  
  vistaRefresh(){
    console.log(this.paginator);
    this.dataSource.paginator = this.paginator;
    this.refresh();
  }

  register(): void{
    this.csjFormService.modifyAux = false;
    this.router.navigate(['Estados/Registrar']);
  }

  navigateModify(id: number): void{
    this.csjFormService.modifyAux = true;
    this.csjFormService.selectedEdoId = id;
    this.router.navigate(['Estados/Registrar']);
  }
}
