import { Injectable } from '@angular/core';
import { Empresa, Sucursal, Departamento, contactInfo, Ubicacion } from '../empresa';
import { Empresas } from '../list-empresas';

var EmpresasList = Empresas;

@Injectable({
  providedIn: 'root'
})
export class EmpresasServiceService {

  constructor() { }

  public modifyAux: boolean;

  public modifyEmpAuxId: number;
  public modifySucAuxId: number;
  public modifyDepAuxId: number;

  public selectedEmpId: number;
  public selectedSucId: number;

  public auxDepDataSource: Departamento[];
  public auxSucDataSource: Sucursal[];
  /*   Empresas    */

  getEmpresas(): Empresa[] {
    return EmpresasList;
  }

  
  addEmpresa(Empresa: Empresa): void {
    EmpresasList.push(Empresa);
  }

  removeEmpresa(regId: number): void {
    EmpresasList = this.removeArrayItemObj(regId, EmpresasList);
  }

  modifyEmpresa(id: number, modifiedEmpresa: Empresa): any {
    EmpresasList[id] = modifiedEmpresa;
    return EmpresasList;
  }

  /*   Empresas    */



  /*  Sucursales   */
  addSucursal(suc: Sucursal, empId: number): any {
    EmpresasList[empId].sucursales.push(suc);
    return EmpresasList;
  }

  removeSucursal(sucId: number, empId: number): Sucursal[] {
    EmpresasList[empId].sucursales = this.removeArrayItemObj(sucId, EmpresasList[empId].sucursales);
    return EmpresasList[empId].sucursales;
  }

  modifySucursal(suc: Sucursal, empId: number): any {
    EmpresasList[empId].sucursales[suc.id] = suc;
    return EmpresasList;
  }
  /*  Sucursales   */



  /* Departamentos */

  addDepartment(dep: Departamento, sucId: number, empId: number): any {
    EmpresasList[empId].sucursales[sucId].dpts.push(dep);
    return EmpresasList;
  }

  removeDepartment(depId: number, sucId: number, empId: number): Departamento[]{
    EmpresasList[empId].sucursales[sucId].dpts = this.removeArrayItemObj(depId, EmpresasList[empId].sucursales[sucId].dpts);
    return EmpresasList[empId].sucursales[sucId].dpts;
  }

  modifyDepartment(dep: Departamento, sucId: number, empId: number): any {
    EmpresasList[empId].sucursales[sucId].dpts[dep.id] = dep;
    return EmpresasList;
  }

  /* Departamentos */


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
