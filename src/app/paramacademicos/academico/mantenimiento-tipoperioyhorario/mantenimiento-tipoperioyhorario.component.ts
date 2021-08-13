import { Component, OnInit } from '@angular/core';

export interface TipoEstudio {
  tipo: string;
  periodo: string;
  pro: string;
  deno: string;
  nomina:string;
  ficha:string;
  contenido:string;
}

export interface Buscar {
  value: string;
  viewValue: string;
}

export interface Aplica {
  value: string;
  viewValue: string;
}

export interface Nomina {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: TipoEstudio[] = [
  {tipo: 'PREGRADO', periodo: '', pro: '7', deno: 'Alumno', nomina:'', ficha:'780710', contenido:'Carrera'},
  {tipo: 'INVESTIGACION Y POSTGRADO', periodo: '', pro: '10', deno: 'Participante', nomina:'', ficha:'510116', contenido:'Programa'},
  {tipo: 'EXTENSIÓN', periodo: '', pro: '9', deno: 'Participante', nomina:'', ficha:'65806', contenido:'Estudio'}
];

@Component({
  selector: 'app-mantenimiento-tipoperioyhorario',
  templateUrl: './mantenimiento-tipoperioyhorario.component.html',
  styleUrls: ['./mantenimiento-tipoperioyhorario.component.css']
})
export class MantenimientoTipoperioyhorarioComponent implements OnInit {

  displayedColumns: string[] = ['tipo', 'periodo', 'pro', 'deno', 'nomina', 'ficha', 'contenido'];
  dataSource = ELEMENT_DATA;
  
  buscar: Buscar[] = [
    {value: '0', viewValue: 'PREGRADO'},
    {value: '1', viewValue: 'INVESTIGACION Y POSTGRADO'},
    {value: '2', viewValue: 'EXTENSIÓN'}
  ];

  aplica: Aplica[] = [
    {value: '0', viewValue: 'SI'},
    {value: '1', viewValue: 'NO'}
  ];

  nomina: Nomina[] = [
    {value: '0', viewValue: 'SI'},
    {value: '1', viewValue: 'NO'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
