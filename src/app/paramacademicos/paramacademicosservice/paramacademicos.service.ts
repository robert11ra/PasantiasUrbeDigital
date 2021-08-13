import { Injectable } from '@angular/core';
import { Institucion, TipoEstudio, TipoPeriodo, Periodo, Estudios, Plantilla, Constancia, Mensaje, TipoMensaje, TipoBloqueo } from '../objparam';
import { Instituciones, EstudiosList, Constancias, Mensajes, TiposBloqueo } from '../mock-params';

@Injectable({
  providedIn: 'root'
})
export class ParamacademicosService {

  InstitucionesList: Institucion[] = Instituciones;
  ListEstudios: Estudios[] = EstudiosList;
  ConstanciasList: Constancia[] = Constancias;
  MensajesList: TipoMensaje[] = Mensajes;
  TipoBloqueoList: TipoBloqueo[] = TiposBloqueo;

  constructor() { }

  /* Instituciones */


  //Devuelve la lista entera de instituciones.
  getInstituciones(){
    return this.InstitucionesList;
  }
  //Devuelve la lista de tipos de estudio de la institución con id "id"
  getTiposEstudio(id: number){
    return this.InstitucionesList[id].tiposestudio;
  }
  //Devuelve la lista de períodos del tipo de estudio con id "idTE" de la institución con id "instid"
  getPeriodos(instid: number, idTE: number){
    return this.InstitucionesList[instid].tiposestudio[idTE].periodos;
  }

  /* Instituciones */


  /* Documentos */
 
  //Devolver la lista de estudios
  getEstudios(){
    return this.ListEstudios;
  }

  //Devolver la lista de plantillas del estudio id "id"
  getPlantillas(id: number){
    return this.ListEstudios[id].plantillas;
  }

  //Devolver la lista de constancias
  getConstancias(){
    return this.ConstanciasList;
  }
  /* Documentos */



  /* Mensajes */

  getMensajes(){
    return this.MensajesList;
  }

  addMensaje(mensaje: Mensaje, tipo: number){
    this.MensajesList[tipo].clasificaciones.push(mensaje);
    return this.MensajesList;
  }

  removeMensaje(id: number, tipo: number){
    this.MensajesList[tipo].clasificaciones = this.removeArrayItemObj(id, this.MensajesList[tipo].clasificaciones);
    return this.MensajesList;

  }

  modifyMensaje(id: number, newMens: Mensaje, tipo: number){
    this.MensajesList[tipo].clasificaciones[id] = newMens;
    return this.MensajesList;
  }

  getTiposBloqueo(){
    return this.TipoBloqueoList;
  }

  addTipoBloqueo(tipobloq: TipoBloqueo){
    this.TipoBloqueoList.push(tipobloq);
    return this.TipoBloqueoList;
  }

  removeTipoBloqueo(id: number){
    this.TipoBloqueoList = this.removeArrayItemObj(id, this.TipoBloqueoList);
    return this.TipoBloqueoList;

  }
  /* Mensajes */



  /* Funciones Auxiliares */
  validateName(name: string): boolean {
    if (!name.replace(/\s/g, '').length) {
      return false;
    }
    return true;
  }


  removeArrayItemObj(itemId: number, targetArray: any[]): any {
    var auxList = [];
    var auxReg: any;
    var registerInc = 0;
    console.log(itemId);
    for (var i = 0; i < targetArray.length; i++) {
      console.log(targetArray[i]);
      console.log(itemId);
      if (itemId != targetArray[i].id) {
        auxReg = targetArray[i];
        auxReg.id = registerInc;
        auxList.push(auxReg);

        registerInc++;
      }
    }
    return auxList;

  }
  /* Funciones Auxiliares */
}
