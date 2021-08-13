import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Consejo } from './csj';
import { LISTACSJS } from './lista-consejos';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CsjformularioserviceService } from '../../formulario/csjformularioservice.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
var modifLISTACSJS = LISTACSJS;

@Component({
  selector: 'app-csjcomunal',
  templateUrl: './csjcomunal.component.html'
})
export class CsjcomunalComponent implements OnInit, AfterViewInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public csjFormService: CsjformularioserviceService, public breakpointObserver: BreakpointObserver, public router: Router) { }

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  

  public csjList: Consejo[] = this.csjFormService.curCsjList;
  dataSource = new MatTableDataSource(this.csjList);
  displayedColumns: string[] = ["nombre"];
  isLargeScreen = false;
  csjaux = "";
  csjModifAux = "";
  addcsjinput="";
  csjModifyButtons = false;
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
    this.dataSource = this.csjFormService.dataSource;
    console.log("Refreshing!");
    console.log(this.dataSource);
    this.csjModifAux = "";
    this.csjaux = "";
    this.addcsjinput = "";
  };

}


