import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Empresa, Ubicacion, contactInfo, Sucursal, Departamento } from 'src/app/empresas/empresa';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MantenimientoDptoEmpresasVistaComponent } from '../mantenimiento-dpto-empresas-vista/mantenimiento-dpto-empresas-vista.component';
@Component({
  selector: 'app-mantenimiento-dpto-empresas-formulario',
  templateUrl: './mantenimiento-dpto-empresas-formulario.component.html',
  styleUrls: ['./mantenimiento-dpto-empresas-formulario.component.css']
})
export class MantenimientoDptoEmpresasFormularioComponent extends MantenimientoDptoEmpresasVistaComponent implements OnInit, AfterViewInit {
 
  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  auxDep: Departamento;
  empFormGroup!: FormGroup;
  modifyAuxObj: Departamento;
  noDataSelected: boolean;

  modEmpId: number;
  modSucId: number;
  modDepId: number;

  selEmp: number;
  selSuc: number;

  ngOnInit(): void {


    this.modDepId = this.empresasService.modifyDepAuxId;
    this.selEmp = this.empresasService.selectedEmpId;
    this.selSuc = this.empresasService.selectedSucId;

    
    if (this.empresasService.modifyAux){
      this.modifyAuxObj = this.empresasService.getEmpresas()[this.selEmp].sucursales[this.selSuc].dpts[this.modDepId];

      console.log(this.modifyAuxObj);
      this.initForm(true);
    }
    else{
      this.initForm(false);
    }

    if(this.selEmp == undefined || this.selSuc == undefined){
      this.noDataSelected = true;
    }
    else{
      this.noDataSelected = false;
    }

    console.log(this.selEmp, " espacio ", this.selSuc)

    
  }

  ngAfterViewInit(){
   
  }
  validateName(name: string): boolean {
    return this.empresasService.validateName(name);
  }

  onSubmit(){
    this.auxDep = { 
      id: this.empresasList[this.selEmp].sucursales[this.selSuc].dpts.length,
      name: this.empFormGroup.value.name,
      desc: this.empFormGroup.value.desc,
      tlfext: this.empFormGroup.value.tlfext,
      location: this.empFormGroup.value.location,
      email: this.empFormGroup.value.email
  };

    if(this.empresasService.modifyAux){
      this.empModify();
    }
    else{
      this.registrar();
    }
  }

  empModify(): void{
    this.auxDep.id = this.modDepId;
    this.empresasService.modifyDepartment(this.auxDep, this.selEmp, this.modDepId);
    this.initForm(false);
    console.log(this.empresasList[this.empresasList.length - 1]);
    this.refreshData();
    alert('Departamento modificado exitosamente.');
    this.returnToView();
  }



  registrar(): void {
    this.empresasService.addDepartment(this.auxDep, this.selSuc, this.selEmp);
    this.initForm(false);
    console.log(this.empresasList[this.empresasList.length - 1]);
    this.refreshData();
    alert('Departamento agregado exitosamente.');
    this.returnToView();
  }

  private initForm(isModifying: boolean): void {
    if (!isModifying) {
      this.empFormGroup = this.fb.group({
        name:['', [Validators.required]],
        desc: ['', [Validators.required]],
        tlfext: ['', [Validators.required, Validators.pattern('^[0-9]{1,5}$')]],
        location: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]]
      });
    }
    else{
      this.empFormGroup = this.fb.group({
        
        name:[this.modifyAuxObj.name,[Validators.required]],
        desc: [this.modifyAuxObj.desc, [Validators.required]],
        tlfext: [this.modifyAuxObj.tlfext, [Validators.required, Validators.pattern('^[0-9]{1,5}$')]],
        location: [this.modifyAuxObj.location, [Validators.required]],
        email: [this.modifyAuxObj.email, [Validators.required, Validators.email]]
      });
    }
    console.log("Form init success!");
  }
 

  returnToView(): void {
    this.router.navigate(['Departamentos']);
  }
}
