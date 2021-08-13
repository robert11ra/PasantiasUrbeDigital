import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Empresa, Sucursal } from '../../empresa';
import { EmpresasServiceService } from '../../empresas-service/empresas-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BreakpointObserver } from '@angular/cdk/layout';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mantenimiento-dpto-empresas',
  templateUrl: './mantenimiento-dpto-empresas.component.html',
  styleUrls: ['./mantenimiento-dpto-empresas.component.css']
})
export class MantenimientoDptoEmpresasComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public empresasList: Empresa[] = this.empresasService.getEmpresas();
  public sucursalesList: Sucursal[];
  dataSource = new MatTableDataSource<any>(this.empresasList);
  isLargeScreen = false;
  displayedColumns: string[] = ['defaultNoData'];
  
  constructor(public empresasService: EmpresasServiceService, public breakpointObserver: BreakpointObserver, public router: Router, public fb:FormBuilder) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
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

  refreshData(): void{
    this.empresasList = this.empresasService.getEmpresas();
    this.dataSource = new MatTableDataSource(this.empresasService.auxDepDataSource);
  }
}
