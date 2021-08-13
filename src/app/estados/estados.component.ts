import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Estado } from './Estado';
import { LISTAEDOS } from './lista-estados';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CsjformularioserviceService} from '../formulario/csjformularioservice.service'
import { BreakpointObserver } from '@angular/cdk/layout';
import { tap } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
var auxListaEstados = LISTAEDOS;
@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit, AfterViewInit {

  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public csjFormService: CsjformularioserviceService, public breakpointObserver: BreakpointObserver, public fb:FormBuilder, public router: Router) { }

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  public edoList: Estado[] = auxListaEstados;
  dataSource = new MatTableDataSource(auxListaEstados);
  displayedColumns: string[] = ['nombre', 'pais', 'fecode'];
  isLargeScreen = false;
  //[Nombre, País, Cod. Ent. Fed]
  edoAddAux: string[] = ["","",""];
  edoModifAux: string[] = ["","",""];
  filterType: string = "none";
  edoModifyButtons = false;
  ngOnInit(): void {
    console.log(this.dataSource);
    console.log(this.displayedColumns);
  }

  ngAfterViewInit() {
    this.breakpointObserver.observe([
      '(min-width: 995px)'
    ]).pipe(
      tap(result => this.isLargeScreen = result.matches)
    ).subscribe(result => {
      if (result.matches) {
        this.dataSource.paginator = this.paginator;
      } else {
        this.dataSource.paginator = null;
      }
    });
    this.dataSource.paginator = this.paginator;
  }

  refresh(){
    auxListaEstados = this.edoList;
    this.dataSource = new MatTableDataSource(auxListaEstados);
    this.edoModifAux = ["","",""];
    this.edoAddAux = ["","",""];
    this.dataSource.paginator = this.paginator;
  };

}
