import { Component, OnInit } from '@angular/core';


interface Food {
  value: string;
  viewValue: string;
}


export interface PeriodicElement {
  name: string;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Fotocopia de certificacion de notas', weight: 0},
  {name: 'Anteproyecto de investigacion', weight: 0},
  {name: 'Contancia de estar tramitando titulos de bachiller', weight: 0},
  {name: 'Constancia prueba aptitud academica', weight: 0},
  {name: 'Curriculum vitae con anexos probatorios', weight: 0},
  {name: 'Dos (2) fotocopias de frente tama;o carnet', weight: 0},
  {name: 'Fondonegro del titulo del bachiller', weight: 0},
  {name: 'Partida de nacimiento', weight: 0},
  {name: 'Fotocopias de las notas certificadas', weight: 0},
  {name: 'Original de copias certificadas de ultimos estudios cursados', weight: 0},
  {name: 'Original de la partida de nacimiento', weight: 0},
  {name: 'Normas administrativas firmadas por el estudiante participante', weight: 0},
  {name: 'Original del titulo de bachiller', weight: 0},
  
];


@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  foods: Food[] = [
    {value: '-0', viewValue: 'Preinscripcion pregrado'},
    {value: '-1', viewValue: 'Preinscripcion postgrado'},
    {value: '2', viewValue: 'Diplomados y cursos'}
  ];

  displayedColumns: string[] = ['documento', 'seleccion'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
