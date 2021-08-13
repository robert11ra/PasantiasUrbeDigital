import { Injectable } from '@angular/core';
import { Consejo } from '../consejos/csjcomunal/csj';
import { LISTACSJS } from '../consejos/csjcomunal/lista-consejos';
import { MatTableDataSource } from '@angular/material/table';
import { OnInit } from '@angular/core';
var modifLISTACSJS = LISTACSJS;
var modifLISTACSJSAux = modifLISTACSJS;
@Injectable({
  providedIn: 'root'
})
export class CsjformularioserviceService implements OnInit{
 dataSource = new MatTableDataSource(modifLISTACSJS);
 curCsjList: Consejo[] = modifLISTACSJS;
 selectedEdoId: number;
 modifyAux: boolean = false;
  constructor(){};
  ngOnInit(): void{
   
  }
//Validar que el nombre no esté vacío, ni que esté compuesto únicamente de espacios.
validateName(name: string): boolean{
  //Expresión regex, elimina los espacios y devuelve la longitud. Si es cero, el string se compone de puros espacios
  if (!name.replace(/\s/g, '').length) {
    return false;
  }

  return true;
}

findInString(base: string, input: string): boolean{
  if(base.trim().toLowerCase().indexOf(input.trim().toLowerCase()) > -1){
    return true;
  }
  else{
    return false;
  }
}

addRegister(data: any, dataSrcArray: any[]): any{
  dataSrcArray.push(data);
  console.log(dataSrcArray);
  return(dataSrcArray);
}

removeRegister(register: any, dataSrcArray: any[]): any[]{
  var auxList = [];
  var auxReg: any;
  var registerInc = 0;
  console.log(register);

  for(var i = 0; i < dataSrcArray.length; i++){

    console.log(dataSrcArray[i]);
    console.log(register);
    if(register != dataSrcArray[i]){
      auxReg = dataSrcArray[i];
      register.id = registerInc;
      auxList.push(auxReg);
    
      registerInc++;
    }
  }

  return auxList;
}

csjModify(data: any, dataSrcArray: any[]): any[]{
  dataSrcArray[data.id] = data;
  return dataSrcArray;
}


}
