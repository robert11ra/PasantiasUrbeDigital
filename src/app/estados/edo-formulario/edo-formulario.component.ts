import { Component, OnInit, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Estado } from '../Estado';
import { EdoVistaComponent } from '../edo-vista/edo-vista.component';
import { LISTAEDOS } from '../lista-estados';
import { FormControl, Validators, FormGroup } from '@angular/forms';

var auxListaEstados = LISTAEDOS;
@Component({
  selector: 'app-edo-formulario',
  templateUrl: './edo-formulario.component.html',
  styleUrls: ['./edo-formulario.component.css']
})
export class EdoFormularioComponent extends EdoVistaComponent implements OnInit, AfterViewInit {

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  auxEdo: Estado;
  edoFormGroup!: FormGroup;
  modifyAuxObj: Estado;
  selEdo: number;
  ngOnInit(): void {

    this.selEdo = this.csjFormService.selectedEdoId;

    
    if (this.csjFormService.modifyAux){
      this.modifyAuxObj = this.edoList[this.selEdo];

      console.log(this.modifyAuxObj);
      this.initForm(true);
    }
    else{
      this.initForm(false);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  validateName(name: string): boolean{
    return this.csjFormService.validateName(name);
  }
  
  onSubmit(){
    this.auxEdo = { 
      id: this.edoList.length,
      name: this.edoFormGroup.value.name,
      country: this.edoFormGroup.value.country,
      fedEntCode: this.edoFormGroup.value.feCode
  };

  if(!this.csjFormService.modifyAux){
    this.addRegister();
    alert('Estado '+ this.auxEdo.name + ' agregado exitosamente.');
  }
 else{
  this.edoModify(this.selEdo);
  alert('Estado '+ this.auxEdo.name + ' modificado exitosamente.');
 }
 this.returnToView();
}
  //Añadir un registro
  addRegister(): void{
  this.edoList = this.csjFormService.addRegister(this.auxEdo, auxListaEstados);
  this.dataSource = new MatTableDataSource(auxListaEstados);
  this.refresh();
  }

  edoModify(id: number): void {
    this.edoList[id] = this.auxEdo;
    this.refresh();
    }

  private initForm(isModifying: boolean): void {
    if(!isModifying){
      this.edoFormGroup = this.fb.group({
        name:['', [Validators.required]],
        country: ['', [Validators.required]],
        feCode: ['']
      });
    }
    else{
      this.edoFormGroup = this.fb.group({
        name:[this.modifyAuxObj.name, [Validators.required]],
        country: [this.modifyAuxObj.country, [Validators.required]],
        feCode: [this.modifyAuxObj.fedEntCode]
      });
    }
    console.log("Form init success!");
  }

  returnToView(): void{
    this.router.navigate(['Estados']);
  }
}
