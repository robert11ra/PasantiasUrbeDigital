import { Component, OnInit } from '@angular/core';

export interface Buscar {
  value: string;
  viewValue: string;
}

export interface Periodos {
  valor: string;
  verValor: string;
}

@Component({
  selector: 'app-mantenimiento-tipoyperiodo',
  templateUrl: './mantenimiento-tipoyperiodo.component.html',
  styleUrls: ['./mantenimiento-tipoyperiodo.component.css']
})
export class MantenimientoTipoyperiodoComponent implements OnInit {
  
  buscar: Buscar[] = [
    {value: '0', viewValue: 'PREGRADO'},
    {value: '1', viewValue: 'POSTGRADO'}
  ];

  periodos: Periodos[] = [
    {valor: '0', verValor: 'Septiembre-2020/Diciembre-2020'},
    {valor: '1', verValor: 'Enero-2021/Abril-2021'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
