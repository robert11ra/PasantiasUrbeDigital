import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MantenimientoEmpresasVistaComponent } from '../mantenimiento-empresas-vista/mantenimiento-empresas-vista.component';
import { Empresa, Ubicacion, contactInfo, Sucursal } from 'src/app/empresas/empresa';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-mantenimiento-empresas-formulario',
  templateUrl: './mantenimiento-empresas-formulario.component.html',
  styleUrls: ['./mantenimiento-empresas-formulario.component.css']
})
export class MantenimientoEmpresasFormularioComponent extends MantenimientoEmpresasVistaComponent implements OnInit, AfterViewInit {

  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  auxEmpresa: Empresa;
  empFormGroup!: FormGroup;
  modifyAuxObj: Empresa;
  ngOnInit(): void {
    if (this.empresasService.modifyAux){
      this.modifyAuxObj = this.empresasService.getEmpresas()[this.empresasService.modifyEmpAuxId];
      console.log(this.modifyAuxObj);
      this.initForm(true);
    }
    else{
      this.initForm(false);
    }
  }

  validateName(name: string): boolean {
    return this.empresasService.validateName(name);
  }

  onSubmit(){
    this.auxEmpresa = { 
    id: -1,
    name: this.empFormGroup.value.name,
    RIF: this.empFormGroup.value.RIF,
    NIT: this.empFormGroup.value.NIT,
    Rsocial: this.empFormGroup.value.name,
    codPub: this.empFormGroup.value.pCode,
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
    contact: {
      tlf: this.empFormGroup.value.tlf,
      fax: this.empFormGroup.value.fax,
      email1: this.empFormGroup.value.email1,
      email2: this.empFormGroup.value.email2,
      website: this.empFormGroup.value.website
    },
    dirsede: this.empFormGroup.value.dirsede,
    postal: this.empFormGroup.value.postal,
    sucursales: []
  };

    if(this.empresasService.modifyAux){
      this.empModify();
    }
    else{
      this.registrar();
    }
  }

  empModify(): void{
    this.auxEmpresa.id = this.empresasService.modifyEmpAuxId;
    this.empresasService.modifyEmpresa(this.empresasService.modifyEmpAuxId, this.auxEmpresa);
    this.initForm(false);
    console.log(this.empresasList[this.empresasList.length - 1]);
    this.refreshData();
    alert('Empresa modificada exitosamente.');
    this.returnToView();
  }



  registrar(): void {
    this.auxEmpresa.id = this.empresasList.length;
    this.empresasService.addEmpresa(this.auxEmpresa);
    this.initForm(false);
    console.log(this.empresasList[this.empresasList.length - 1]);
    this.refreshData();
    alert('Empresa agregada exitosamente.');
    this.returnToView();
  }

  private initForm(isModifying: boolean): void {
    if (!isModifying) {
      this.empFormGroup = this.fb.group({
        name: ['', [Validators.required]],
        RIF: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{2,254}')]],
        NIT: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{2,254}')]],
        pCode: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{2,254}')]],
        ciudad: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,254}')]],
        municipio: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,254}')]],
        zona: ['', [Validators.required]],
        nroedif: ['', [Validators.required, Validators.pattern('^[0-9]{1,2}$')]],
        piso: [''],
        apto: ['' ],
        calle: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9\-]{2,254}')]],
        sector: ['', [Validators.required]],
        tlf: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
        fax: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
        email1: ['', [Validators.required, Validators.email]],
        email2: ['', [Validators.required, Validators.email]],
        website: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*\.*[a-zA-Z0-9]+\.[a-zA-Z]{1,3}')]],
        dirsede: ['', [Validators.required]],
        postal: ['', [Validators.required, Validators.pattern('[0-9]{2,8}')]],
      });
    }
    else{
      this.empFormGroup = this.fb.group({
        name: [this.modifyAuxObj.name, [Validators.required]],
        RIF: [this.modifyAuxObj.RIF, [Validators.required, Validators.pattern('[a-zA-Z0-9]{2,254}')]],
        NIT: [this.modifyAuxObj.NIT, [Validators.required, Validators.pattern('[a-zA-Z0-9]{2,254}')]],
        pCode: [this.modifyAuxObj.codPub, [Validators.required, Validators.pattern('[a-zA-Z0-9]{2,254}')]],
        ciudad: [this.modifyAuxObj.location.ciudad, [Validators.required, Validators.pattern('[a-zA-Z]{2,254}')]],
        municipio: [this.modifyAuxObj.location.municipio, [Validators.required, Validators.pattern('[a-zA-Z]{2,254}')]],
        zona: [this.modifyAuxObj.location.zona, [Validators.required]],
        nroedif: [this.modifyAuxObj.location.nroedif, [Validators.required, Validators.pattern('^[0-9]{1,2}$')]],
        piso: [this.modifyAuxObj.location.piso],
        apto: [this.modifyAuxObj.location.apto],
        calle: [this.modifyAuxObj.location.calle, [Validators.required, Validators.pattern('[a-zA-Z0-9\-]{2,254}')]],
        sector: [this.modifyAuxObj.location.sector, [Validators.required]],
        tlf: [this.modifyAuxObj.contact.tlf, [Validators.required, Validators.pattern('^[0-9]{11}$')]],
        fax: [this.modifyAuxObj.contact.fax, [Validators.required, Validators.pattern('^[0-9]{11}$')]],
        email1: [this.modifyAuxObj.contact.email1, [Validators.required, Validators.email]],
        email2: [this.modifyAuxObj.contact.email2, [Validators.required, Validators.email]],
        website: [this.modifyAuxObj.contact.website, [Validators.required, Validators.pattern('[a-zA-Z0-9]*\.*[a-zA-Z0-9]+\.[a-zA-Z]{1,3}')]],
        dirsede: [this.modifyAuxObj.dirsede, [Validators.required]],
        postal: [this.modifyAuxObj.postal, [Validators.required, Validators.pattern('[0-9]{2,8}')]],
      });
    }
    console.log("Form init success!");
  }


  returnToView(): void {
    this.router.navigate(['Empresas']);
  }
}
