import { Component, ViewChild, OnInit} from '@angular/core';
import { CsjcomunalComponent } from '../csjcomunal/csjcomunal.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Consejo } from '../csjcomunal/csj';


@Component({
  selector: 'app-csjvista',
  templateUrl: './csjvista.component.html'
})
export class CsjvistaComponent extends CsjcomunalComponent implements OnInit{

  @ViewChild(MatTable) csjTable: MatTable<Consejo>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  
  ngOnInit(){
    
  };

  csjSeleccionado?: Consejo;
  onSelect(consejo: Consejo): void {
    
    if(this.csjSeleccionado == consejo){
      this.csjSeleccionado = undefined;
    }
    else{
      this.csjSeleccionado = consejo;
    }

  }

  validateName(name: string): boolean{
    return this.csjFormService.validateName(name);
  }

  csjModify(name: string, id: number): void {
    var register: Consejo = {id: id, name: name};
    this.csjFormService.csjModify(register, this.csjList);
    this.refresh();
    }
   
    toggleEditButtons(): void{
      if(this.displayedColumns.length > 1 && this.displayedColumns[1] == 'modificar'){
        this.displayedColumns = ['nombre'];
      }
      else{    
        this.displayedColumns =['nombre', 'modificar'];
      }
      console.log(this.displayedColumns);
    }
    
    toggleDeleteButtons(): void{
      if(this.displayedColumns.length > 1 && this.displayedColumns[1] == 'eliminar'){
        this.displayedColumns = ['nombre'];
      }
      else{
        this.displayedColumns =['nombre', 'eliminar'];
      }
    }
    
    toggleEditButtonSpecific(): boolean{
      if(this.csjModifyButtons){
        this.csjModifyButtons = false;
      }
      else{
        this.csjModifyButtons = true;
      }
    
      return this.csjModifyButtons;
    }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Eliminar un registro
  removeRegister(register: Consejo): void {
    this.csjFormService.removeRegister(register, this.csjList);
    this.refresh();
  }
  
  vistaRefresh(){
    console.log(this.paginator);
    this.dataSource = this.csjFormService.dataSource;
    this.dataSource.paginator = this.paginator;
    this.refresh();
  }

  formNavigate(): void{
    this.router.navigate(['Consejos/Registrar']);
  }

}
