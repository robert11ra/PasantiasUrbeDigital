import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  mobileQuery: MediaQueryList;

  fillerNav = [
    { name: "Tipo de periodo", route: "ParametrosAcademicos/TipoPeriodo", icon: "" },
    { name: "Actividades", route: "ParametrosAcademicos/Actividades", icon: "" },
    { name: "Calendario", route: "ParametrosAcademicos/Calendario", icon: "" },
    { name: "Horario", route: "ParametrosAcademicos/Horario", icon: "" },
    { name: "Academico", route: "ParametrosAcademicos/Academico", icon: "" },
    { name: "Periodo", route: "ParametrosAcademicos/Periodos", icon: "" },
    { docu: "Documentos", ruta: "ParametrosAcademicos/Documentos", icon: "" },
    { docu: "Constancias", ruta: "ParametrosAcademicos/Constancias", icon: "" },
    { docu: "Imprimir Planilla", ruta: "ParametrosAcademicos/ImprimePlanilla", icon: "" },
    { mensa: "Registrar", rout: "ParametrosAcademicos/Mensajes/Registrar", icon: "" },
    { mensa: "Mensajes", rout: "ParametrosAcademicos/Mensajes", icon: "" },
    { mensa: "Tipos de Bloqueo", rout: "ParametrosAcademicos/TiposBloqueo", icon: "" }
  ]
  private _mobileQueryListener: () => void;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
