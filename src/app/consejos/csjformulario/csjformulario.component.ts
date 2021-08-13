import { Component, OnInit, AfterViewInit} from '@angular/core';
import { CsjvistaComponent } from '../csjvista/csjvista.component';
import { Consejo } from '../csjcomunal/csj';
import { LISTACSJS } from '../lista-consejos';
import { MatTableDataSource } from '@angular/material/table';
var modifLISTACSJS = LISTACSJS;

@Component({
  selector: 'app-csjformulario',
  templateUrl: './csjformulario.component.html'

})
export class CsjformularioComponent extends CsjvistaComponent implements AfterViewInit, OnInit {
 
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  validateName(name: string): boolean{
    return this.csjFormService.validateName(name);
  }
  
  //Añadir un registro
  addRegister(name: string): void{
  var addRegData: Consejo = {id: this.csjList.length, name: name};
  this.csjList = this.csjFormService.addRegister(addRegData, this.csjList);
  this.csjFormService.dataSource = new MatTableDataSource(this.csjList);
  this.refresh();
  }

  goBack(): void{
    this.router.navigate(['Consejos']);
  }
}
