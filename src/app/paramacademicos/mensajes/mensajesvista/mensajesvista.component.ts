import { TipoMensaje } from '../../objparam';
import { MatTable } from '@angular/material/table';
import { ParamacademicosService } from '../../paramacademicosservice/paramacademicos.service';
import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BreakpointObserver } from '@angular/cdk/layout';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-mensajesvista',
  templateUrl: './mensajesvista.component.html',
  styleUrls: ['./mensajesvista.component.css']
})
export class MensajesvistaComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<TipoMensaje>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private paramservice: ParamacademicosService, private router: Router,  public breakpointObserver: BreakpointObserver) { }

  dataSource = new MatTableDataSource(this.paramservice.getMensajes());
  isLargeScreen = false;
  displayedColumns: string[] = ['nombre', 'boton'];

  selectedRow?: TipoMensaje;

  
  onSelect(row: TipoMensaje): void {
    
    if(this.selectedRow == row){
      this.selectedRow = undefined;
    }
    else{
      this.selectedRow = row;
    }
  }

  applyFilter(event: Event){
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }
  ngOnInit(): void {
    console.log(this.dataSource);
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
