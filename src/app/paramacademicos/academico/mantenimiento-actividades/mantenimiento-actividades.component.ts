import { Component, OnInit } from '@angular/core';

export interface TipoEstudio {
  semana: string;
  fecha: string;
  pro: string;
  obs: string;
}

export interface Buscar {
  value: string;
  viewValue: string;
}

export interface Periodos {
  valor: string;
  verValor: string;
}

const ELEMENT_DATA: TipoEstudio[] = [
  {semana: '1', fecha: '05-09-2019/03-12-2019', pro: 'Culminado', obs: 'Trimestre sin inconveniente'}
];

@Component({
  selector: 'app-mantenimiento-actividades',
  templateUrl: './mantenimiento-actividades.component.html',
  styleUrls: ['./mantenimiento-actividades.component.css']
})
export class MantenimientoActividadesComponent implements OnInit {

  displayedColumns: string[] = ['semana', 'fecha', 'pro', 'obs'];
  dataSource = ELEMENT_DATA;
  
  buscar: Buscar[] = [
    {value: '0', viewValue: 'PREGRADO'},
    {value: '1', viewValue: 'POSTGRADO'}
  ];

  periodos: Periodos[] = [
    {valor: '0', verValor: 'Septiembre-2019/Diciembre-2019'},
    {valor: '1', verValor: 'Enero-2020/Abril-2020'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
