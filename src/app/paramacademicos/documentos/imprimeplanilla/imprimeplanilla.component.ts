import { Component, OnInit } from '@angular/core';




export interface PeriodicElement {
 
  
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {symbol: 'OneNote for Windows 10'},
  {symbol: 'Microsoft XPS Documents Write'},
  {symbol: 'Microsoft Print to PDF'},
  {symbol: 'Fax'},
  {symbol: 'Enviar a OneNote 2010'},


  

  
];
@Component({
  selector: 'app-imprimeplanilla',
  templateUrl: './imprimeplanilla.component.html',
  styleUrls: ['./imprimeplanilla.component.css']
})
export class ImprimeplanillaComponent implements OnInit {

  displayedColumns: string[] = ['symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
