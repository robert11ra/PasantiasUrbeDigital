import { Component, OnInit } from '@angular/core';

export interface TipoPeriodos {
  periodo: string;
  tipodeperiodo: string;
  fechaini: string;
  fechafin: string;
  inicontra:string;
  fincontra:string;
  tipoperiodo:string;
  orden:string;
  persem:string;
  abreviperiodo: string;
  semanas:string;
  ficha:string;
  color:string;
  estado:string
}

export interface TipodeEstudio {
  value: string;
  viewValue: string;
}

export interface Buscar {
  value: string;
  viewValue: string;
}

export interface FechaIni {
  value: string;
  viewValue: string;
}

export interface FechaFin {
  value: string;
  viewValue: string;
}
export interface IniContra {
  value: string;
  viewValue: string;
}
export interface FinContra {
  value: string;
  viewValue: string;
}
export interface TipoPeriodo {
  value: string;
  viewValue: string;
}
export interface Color {
  value: string;
  viewValue: string;
}
export interface Estado {
  value: string;
  viewValue: string;
}


const ELEMENT_DATA: TipoPeriodos[] = [
  {periodo:'Septiembre-1995/Julio-1996', tipodeperiodo:'NORMAL', fechaini:'', fechafin:'', inicontra:'', fincontra:'',tipoperiodo:'', orden:'-5', persem:'105N', abreviperiodo:'Sep 1995 - Jul 1996', semanas:'', ficha:'', color:'', estado:''},
  {periodo:'Septiembre-1995/Julio-1996', tipodeperiodo:'NORMAL', fechaini:'', fechafin:'', inicontra:'', fincontra:'',tipoperiodo:'', orden:'-5', persem:'105N', abreviperiodo:'Sep 1995 - Jul 1996', semanas:'', ficha:'', color:'', estado:''},
  {periodo:'Septiembre-1995/Julio-1996', tipodeperiodo:'NORMAL', fechaini:'', fechafin:'', inicontra:'', fincontra:'',tipoperiodo:'', orden:'-5', persem:'105N', abreviperiodo:'Sep 1995 - Jul 1996', semanas:'', ficha:'', color:'', estado:''},
  {periodo:'Septiembre-1995/Julio-1996', tipodeperiodo:'NORMAL', fechaini:'', fechafin:'', inicontra:'', fincontra:'',tipoperiodo:'', orden:'-5', persem:'105N', abreviperiodo:'Sep 1995 - Jul 1996', semanas:'', ficha:'', color:'', estado:''},
  {periodo:'Septiembre-1995/Julio-1996', tipodeperiodo:'NORMAL', fechaini:'', fechafin:'', inicontra:'', fincontra:'',tipoperiodo:'', orden:'-5', persem:'105N', abreviperiodo:'Sep 1995 - Jul 1996', semanas:'', ficha:'', color:'', estado:''},
  {periodo:'Septiembre-1995/Julio-1996', tipodeperiodo:'NORMAL', fechaini:'', fechafin:'', inicontra:'', fincontra:'',tipoperiodo:'', orden:'-5', persem:'105N', abreviperiodo:'Sep 1995 - Jul 1996', semanas:'', ficha:'', color:'', estado:''},
  {periodo:'Septiembre-1995/Julio-1996', tipodeperiodo:'NORMAL', fechaini:'', fechafin:'', inicontra:'', fincontra:'',tipoperiodo:'', orden:'-5', persem:'105N', abreviperiodo:'Sep 1995 - Jul 1996', semanas:'', ficha:'', color:'', estado:''},
  {periodo:'Septiembre-1995/Julio-1996', tipodeperiodo:'NORMAL', fechaini:'', fechafin:'', inicontra:'', fincontra:'',tipoperiodo:'', orden:'-5', persem:'105N', abreviperiodo:'Sep 1995 - Jul 1996', semanas:'', ficha:'', color:'', estado:''},
  {periodo:'Septiembre-1995/Julio-1996', tipodeperiodo:'NORMAL', fechaini:'', fechafin:'', inicontra:'', fincontra:'',tipoperiodo:'', orden:'-5', persem:'105N', abreviperiodo:'Sep 1995 - Jul 1996', semanas:'', ficha:'', color:'', estado:''},
  {periodo:'Septiembre-1995/Julio-1996', tipodeperiodo:'NORMAL', fechaini:'', fechafin:'', inicontra:'', fincontra:'',tipoperiodo:'', orden:'-5', persem:'105N', abreviperiodo:'Sep 1995 - Jul 1996', semanas:'', ficha:'', color:'', estado:''},
  {periodo:'Septiembre-1995/Julio-1996', tipodeperiodo:'NORMAL', fechaini:'', fechafin:'', inicontra:'', fincontra:'',tipoperiodo:'', orden:'-5', persem:'105N', abreviperiodo:'Sep 1995 - Jul 1996', semanas:'', ficha:'', color:'', estado:''}
];

@Component({
  selector: 'app-mantenimiento-periodos',
  templateUrl: './mantenimiento-periodos.component.html',
  styleUrls: ['./mantenimiento-periodos.component.css']
})
export class MantenimientoPeriodosComponent implements OnInit {
  displayedColumns: string[] = ['periodo', 'tipodeperiodo', 'fechaini', 'fechafin', 'inicontra', 'fincontra', 'tipoperiodo', 'orden', 'persem', 'abreviperiodo', 'semanas', 'ficha', 'color', 'estado'];
  dataSource = ELEMENT_DATA;
  
  estudio: TipodeEstudio[] = [
    {value: '0', viewValue: 'PREGRADO'},
    {value: '1', viewValue: 'INVESTIGACION Y POSTGRADO'},
    {value: '2', viewValue: 'EXTENSIÓN'}
  ];

  busca: Buscar[] = [
    {value: '0', viewValue: ''},
    {value: '1', viewValue: ''}
  ];

  fechaini: FechaIni[] = [
    {value: '0', viewValue: '04/09/1995'}
  ];

  fechafin: FechaFin[] = [
    {value: '0', viewValue: '26/07/1996'}
  ];
  
  inicontra: IniContra[] = [
    {value: '0', viewValue: '00/00/0000'}
  ];
  
  fincontra: FinContra[] = [
    {value: '0', viewValue: '00/00/0000'}
  ];
  
  tipoperiodo: TipoPeriodo[] = [
    {value: '0', viewValue: 'SEMESTRE'}
  ];
  
  color: Color[] = [
    {value: '0', viewValue: 'No tiene Color Asignado'}
  ];
  
  estado: Estado[] = [
    {value: '0', viewValue: 'ACTIVO'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
