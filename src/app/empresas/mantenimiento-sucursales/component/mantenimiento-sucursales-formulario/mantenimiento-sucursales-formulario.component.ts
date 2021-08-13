import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Empresa, Ubicacion, contactInfo, Sucursal, Departamento } from 'src/app/empresas/empresa';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MantenimientoSucursalesVistaComponent } from '../mantenimiento-sucursales-vista/mantenimiento-sucursales-vista.component';
@Component({
  selector: 'app-mantenimiento-sucursales-formulario',
  templateUrl: './mantenimiento-sucursales-formulario.component.html',
  styleUrls: ['./mantenimiento-sucursales-formulario.component.css']
})
export class MantenimientoSucursalesFormularioComponent extends MantenimientoSucursalesVistaComponent implements OnInit {

  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  auxSuc: Sucursal;
  empFormGroup!: FormGroup;
  modifyAuxObj: Sucursal;
  noDataSelected: boolean;


  selEmp: number;
  selSuc: number;

  ngOnInit(): void {

    this.selEmp = this.empresasService.selectedEmpId;
    this.selSuc = this.empresasService.selectedSucId;


    if (this.empresasService.modifyAux) {
      this.modifyAuxObj = this.empresasService.getEmpresas()[this.selEmp].sucursales[this.selSuc];

      console.log(this.modifyAuxObj);
      this.initForm(true);
    }
    else {
      this.initForm(false);
    }

    if (this.selEmp == undefined) {
      console.log(this.selEmp == undefined);
      this.noDataSelected = true;
    }
    else {
      this.noDataSelected = false;
    }

    console.log(this.selEmp, " espacio ", this.selSuc)


  }

  ngAfterViewInit() {

  }
  validateName(name: string): boolean {
    return this.empresasService.validateName(name);
  }

  onSubmit() {
    this.auxSuc = {
      id: this.empresasList[this.selEmp].sucursales.length,
      name: this.empFormGroup.value.name,
      location: {
        ciudad: this.empFormGroup.value.ciudad,
        municipio: this.empFormGroup.value.municipio,
        zona: this.empFormGroup.value.zona,
        nroedif: this.empFormGroup.value.nroedif,
        piso: this.empFormGroup.value.piso,
        apto: this.empFormGroup.value.apto,
        calle: this.empFormGroup.value.calle,
        sector: this.empFormGroup.value.sector
      },
      status: this.empFormGroup.value.status,
      tlf: this.empFormGroup.value.tlf,
      fax: this.empFormGroup.value.fax,
      email:this.empFormGroup.value.email,
      dpts: []
    };

    if (this.empresasService.modifyAux) {
      this.empModify();
    }
    else {
      this.registrar();
    }
  }

  empModify(): void {
    this.auxSuc.id = this.selSuc;
    this.empresasService.modifySucursal(this.auxSuc, this.selEmp);
    this.initForm(false);
    console.log(this.empresasList[this.empresasList.length - 1]);
    this.refreshData();

    alert('Sucursal modificada exitosamente.');
    this.returnToView();
  }



  registrar(): void {
    this.empresasService.addSucursal(this.auxSuc, this.selEmp);
    this.initForm(false);
    console.log(this.empresasList[this.empresasList.length - 1]);
    this.refreshData();
    alert('Sucursal agregada exitosamente.');
    this.returnToView();
  }

  private initForm(isModifying: boolean): void {
    if (!isModifying) {
      this.empFormGroup = this.fb.group({
        name: ['', [Validators.required]],
        status: ['', [Validators.required]],
        fax: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        tlf: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
        ciudad: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,254}')]],
        municipio: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,254}')]],
        zona: ['', [Validators.required]],
        nroedif: ['', [Validators.required]],
        piso: [''],
        apto: [''],
        calle: ['', [Validators.required]],
        sector: ['', [Validators.required]],
      });
    }
    else {
      this.empFormGroup = this.fb.group({
        name: [this.modifyAuxObj.name, [Validators.required]],
        status: [this.modifyAuxObj.status, [Validators.required]],
        fax: [this.modifyAuxObj.fax, [Validators.required]],
        email: [this.modifyAuxObj.email, [Validators.required, Validators.email]],
        tlf: [this.modifyAuxObj.tlf, [Validators.required, Validators.pattern('^[0-9]{11}$')]],
        ciudad: [this.modifyAuxObj.location.ciudad, [Validators.required, Validators.pattern('[a-zA-Z]{2,254}')]],
        municipio: [this.modifyAuxObj.location.municipio, [Validators.required, Validators.pattern('[a-zA-Z]{2,254}')]],
        zona: [this.modifyAuxObj.location.zona, [Validators.required]],
        nroedif: [this.modifyAuxObj.location.nroedif, [Validators.required]],
        piso: [this.modifyAuxObj.location.piso],
        apto: [this.modifyAuxObj.location.apto],
        calle: [this.modifyAuxObj.location.calle, [Validators.required]],
        sector: [this.modifyAuxObj.location.sector, [Validators.required]],
      });
    }
    console.log("Form init success!");
  }


  returnToView(): void {
    this.router.navigate(['Sucursales']);
  }

  debugStatus(): void{
    console.log(this.empFormGroup);
  }
}
