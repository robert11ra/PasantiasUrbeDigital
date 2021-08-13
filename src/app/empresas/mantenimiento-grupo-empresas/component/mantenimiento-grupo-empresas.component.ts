import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { grupoempresa } from '../../empresa';
import { GruposEmpresas } from '../../list-empresas';
import { EmpresasServiceService } from '../../empresas-service/empresas-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BreakpointObserver } from '@angular/cdk/layout';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-mantenimiento-grupo-empresas',
  templateUrl: './mantenimiento-grupo-empresas.component.html',
  styleUrls: ['./mantenimiento-grupo-empresas.component.css']
})
export class MantenimientoGrupoEmpresasComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  grupoEmpresasList: grupoempresa[] = GruposEmpresas;
  dataSource = new MatTableDataSource(this.grupoEmpresasList);
  isLargeScreen = false;
  displayedColumns: string[] = ['nombre'];
  public gruposList: grupoempresa[] = GruposEmpresas;
  constructor(public empresasService: EmpresasServiceService, public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
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
}
