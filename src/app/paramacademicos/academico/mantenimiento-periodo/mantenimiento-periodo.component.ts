import { Component, OnInit } from '@angular/core';

export interface TipoEstudio {
  tipo: string;
  obs: string;
}

export interface Buscar {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: TipoEstudio[] = [
  {tipo: 'SEMESTRE', obs: '6 MESES'}
];

@Component({
  selector: 'app-mantenimiento-periodo',
  templateUrl: './mantenimiento-periodo.component.html',
  styleUrls: ['./mantenimiento-periodo.component.css']
})
export class MantenimientoPeriodoComponent implements OnInit {

  displayedColumns: string[] = ['tipo', 'obs'];
  dataSource = ELEMENT_DATA;
  
  buscar: Buscar[] = [
    {value: '0', viewValue: 'SEMESTRE'},
    {value: '1', viewValue: 'TRIMESTRE'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
