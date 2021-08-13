import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mensaje, TipoMensaje, TipoBloqueo } from '../../objparam';
import { ParamacademicosService } from '../../paramacademicosservice/paramacademicos.service';
import { MensajesComponent } from '../mensajes.component';

@Component({
  selector: 'app-mensajesformulario',
  templateUrl: './mensajesformulario.component.html',
  styleUrls: ['./mensajesformulario.component.css']
})
export class MensajesformularioComponent implements OnInit {

  constructor(private fb: FormBuilder, private paramservice: ParamacademicosService, private router: Router) { }

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  auxmsg: Mensaje;
  empFormGroup!: FormGroup;
  noDataSelected: boolean;
  modifyAux: boolean = false;
  modifyAuxObj: Mensaje;
  tipoBloqList: TipoBloqueo[] = this.paramservice.getTiposBloqueo();
  auxTipoSel: TipoMensaje;
  selType: TipoMensaje;
  selMsg: Mensaje;

  formTipoSel: TipoMensaje;
  formTipoBloq: TipoBloqueo;

  checkMsgList(){
    console.log(this.msgClassList);
  }

  msgList: TipoMensaje[] = this.paramservice.getMensajes();
  msgClassList: Mensaje[];
  ngOnInit(): void {
    if (this.modifyAux) {
      console.log(this.selType, " ÑÑÑÑÑÑÑÑ ", this.selMsg);
            this.modifyAuxObj = this.msgList[this.selType.id].clasificaciones[this.selMsg.id];

      this.auxmsg = this.modifyAuxObj;
      this.initForm(true);
    }

    else {
      this.auxmsg = {
        id: 0,
        clasif: "",
        desc: "",
        nivelbloq: this.tipoBloqList[0],
        notificar: false,
        mostrar: false,
        mostrarweb: false,
        enviocorreo: false,
        confidencial: false,
        firmaconsejo: false,
        sancionable: false,
        mostexp: false
      }
      this.initForm(false);
    }

  }

  ngAfterViewInit() {

  }

  validateName(name: string): boolean {
    return this.paramservice.validateName(name);
  }

  onSubmit() {
    if (this.modifyAux) {
      var auxTypeChange: number;
      if (this.selType.id == this.empFormGroup.value.tipo) {
        auxTypeChange = this.msgList[this.empFormGroup.value.tipo].clasificaciones.length
      }
      else {
        auxTypeChange = this.modifyAuxObj.id;
      }

      this.auxmsg = {
        id: auxTypeChange,
        clasif: this.empFormGroup.value.clasif,
        desc: this.empFormGroup.value.desc,
        nivelbloq: this.empFormGroup.value.nivelbloq,
        notificar: this.empFormGroup.value.notificar,
        mostrar: this.empFormGroup.value.mostrar,
        mostrarweb: this.empFormGroup.value.mostrarweb,
        enviocorreo: this.empFormGroup.value.enviocorreo,
        confidencial: this.empFormGroup.value.confidencial,
        firmaconsejo: this.empFormGroup.value.firmaconsejo,
        sancionable: this.empFormGroup.value.sancionable,
        mostexp: this.empFormGroup.value.mostexp
      }

      if (this.selType == this.empFormGroup.value.tipo) {
  
        this.paramservice.modifyMensaje(auxTypeChange, this.auxmsg, this.empFormGroup.value.tipo.id);
      }

      else {
        this.paramservice.removeMensaje(auxTypeChange, this.empFormGroup.value.tipo.id);
        this.paramservice.addMensaje(this.auxmsg, this.empFormGroup.value.tipo.id);
      }

    }
    else {
      this.auxmsg = {
        id: this.msgList[this.selType.id].clasificaciones.length,
        clasif: this.empFormGroup.value.clasif,
        desc: this.empFormGroup.value.desc,
        nivelbloq: this.empFormGroup.value.nivelbloq,
        notificar: this.empFormGroup.value.notificar,
        mostrar: this.empFormGroup.value.mostrar,
        mostrarweb: this.empFormGroup.value.mostrarweb,
        enviocorreo: this.empFormGroup.value.enviocorreo,
        confidencial: this.empFormGroup.value.confidencial,
        firmaconsejo: this.empFormGroup.value.firmaconsejo,
        sancionable: this.empFormGroup.value.sancionable,
        mostexp: this.empFormGroup.value.mostexp
      }
    }
    this.modifyAux = false;
    this.initForm(false);
    
  }


  private initForm(isModifying: boolean): void {
    if (!isModifying) {
      this.empFormGroup = this.fb.group({
        tipo: ['', [Validators.required]],
        clasif: ['', [Validators.required]],
        desc: ['', [Validators.required]],
        nivelbloq: [, Validators.required],
        notificar: [false, [Validators.required]],
        mostrar: [false, [Validators.required]],
        mostrarweb: [false, [Validators.required]],
        enviocorreo: [false, [Validators.required]],
        confidencial: [false, [Validators.required]],
        firmaconsejo: [false, [Validators.required]],
        sancionable: [false, [Validators.required]],
        mostexp: [false, [Validators.required]]
      });
    }
    else {
      this.empFormGroup = this.fb.group({
        tipo: [this.msgList[this.selType.id], [Validators.required]],
        clasif: [this.modifyAuxObj.clasif, [Validators.required]],
        desc: [this.modifyAuxObj.desc, [Validators.required]],
        nivelbloq: [this.modifyAuxObj.nivelbloq, [Validators.required]],
        notificar: [this.modifyAuxObj.notificar, [Validators.required]],
        mostrar: [this.modifyAuxObj.mostrar, [Validators.required]],
        mostrarweb: [this.modifyAuxObj.mostrarweb, [Validators.required]],
        enviocorreo: [this.modifyAuxObj.enviocorreo, [Validators.required]],
        confidencial: [this.modifyAuxObj.confidencial, [Validators.required]],
        firmaconsejo: [this.modifyAuxObj.firmaconsejo, [Validators.required]],
        sancionable: [this.modifyAuxObj.sancionable, [Validators.required]],
        mostexp: [this.modifyAuxObj.mostexp, [Validators.required]]
      });
      this.formTipoSel = this.msgList[this.selType.id];
      this.formTipoBloq = this.modifyAuxObj.nivelbloq;
      console.log(this.formTipoBloq);
      console.log(this.tipoBloqList);
    }
    
    console.log("Form init success!");
  }


  returnToView(): void {
    this.router.navigate(['ParametrosAcademicos/Mensajes']);
  }
}
