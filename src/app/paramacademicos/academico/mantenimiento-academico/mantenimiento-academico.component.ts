import { Component, OnInit } from '@angular/core';
export interface Institucion {
  inst: string;
}

export interface Buscar {
  value: string;
  viewValue: string;
}


const ELEMENT_DATA: Institucion[] = [
  {inst: 'PRIVADA DR. RAFAEL BELLOSO CHACÍN'}
];
@Component({
  selector: 'app-mantenimiento-academico',
  templateUrl: './mantenimiento-academico.component.html',
  styleUrls: ['./mantenimiento-academico.component.css']
})
export class MantenimientoAcademicoComponent implements OnInit {
  displayedColumns: string[] = ['inst'];
  dataSource = ELEMENT_DATA;
  
  buscar: Buscar[] = [
    {value: '0', viewValue: 'PRIVADA DR. RAFAEL BELLOSO CHACÍN'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
