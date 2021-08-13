import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  autoridad: string;
  codigo: number;
  weight: string;
  paga: string;
  dw: string;
  is: string;
  AplicaDatos: string;
  ImprimeNotas: number;
}

const ELEMENT_DATA: PeriodicElement[] = [

  {codigo: 1 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'ESTUDIOS DE INICIO Y FIN EXTERIOR POR EL RECTOR', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 0},
  {codigo: 2 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'ESTUDIOS AL EXTERIOR POR EL RECTOR', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 1},
  {codigo: 3 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'ESTUDIOS POR RL RECTOR', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 0},
  {codigo: 4 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'NO BECADO POR EL RECTOR', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 0},
  {codigo: 5 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'BUENA CONDUCTA POR EL RECTOR', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 1},
  {codigo: 6 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'NO SANCIÓN POR EL RECTOR', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 0},
  {codigo: 7 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'ESTUDIOS INICIO - FIN (ESPECIAL)', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 0},
  {codigo: 8 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'ESTUDIOS SIN PERÍODO POR EL RECTOR', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 0},
  {codigo: 9 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'NOTAS POR EL RECTOR', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 0},
  {codigo: 10 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight:'NOTAS APROBADAS Y REPROBADAS POR EL RECTOR', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 0},
  {codigo: 11 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'NOTAS CERTIFICADAS DE MAESTRIAS APROBADAS', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 0},
  {codigo: 12 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'CARTA DE EGRESO POR EL RECTOR', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 0},
  {codigo: 13 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'ACTA DE GRADO POR EL RECTOR', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 1},
  {codigo: 14 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'CULMINACIÓN ESCOLARIDAD POR EL SECRETARIO', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 0},
  {codigo: 15 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'NOTAS POR EL RECTOR', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 0},
  {codigo: 16 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'CULMINACIÓN ESCOLARIDAD POR EL SECRETARIO', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 0},
  {codigo: 17 , autoridad: 'Dr. Oscar Henrrique Belloso Medina', weight: 'APROBACIÓN DEL SERVICIO COMUNITARIO POR EL SECRETARIO', paga: 'SI', dw: 'lorem', is: 'NO', AplicaDatos: 'SI', ImprimeNotas: 1},


  
];

@Component({
  selector: 'app-constancias',
  templateUrl: './constancias.component.html',
  styleUrls: ['./constancias.component.css']
})
export class ConstanciasComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'autoridad', 'weight', 'paga', 'dw', 'is', 'AplicaDatos', 'ImprimeNotas'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
