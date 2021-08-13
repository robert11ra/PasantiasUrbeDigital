import { Component, OnInit } from '@angular/core';
export interface TipoEstudio {
  semana: string;
  fecha: string;
  fecha2: string;
  feri: string;
  acum:string;
}


const ELEMENT_DATA: TipoEstudio[] = [
  {semana: '1', fecha: '05-09-2019', fecha2: '03-12-2019', feri: 'Feriados', acum: '15%'}
];
@Component({
  selector: 'app-mantenimiento-calendario',
  templateUrl: './mantenimiento-calendario.component.html',
  styleUrls: ['./mantenimiento-calendario.component.css']
})
export class MantenimientoCalendarioComponent implements OnInit {

  displayedColumns: string[] = ['semana', 'fecha', 'fecha2', 'feri', 'acum'];
  dataSource = ELEMENT_DATA;



  constructor() { }

  ngOnInit(): void {
  }

}
