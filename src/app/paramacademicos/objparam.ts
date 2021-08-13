export interface Institucion{
id:number,
nombre: string,
tiposestudio: TipoEstudio[],
};

export interface TipoEstudio{
id: number,
nombre: string,
aplicaperiodo: string,
tipohorario: number,
denominacion: string,
generanomina: string,
ultficha: number,
nombrecont: string
periodos: Periodo[]

}

export interface TipoPeriodo{
id: number,
nombre: string,
observaciones: string
}

export interface Periodo{
id: number,
nombre: string,
tipo1: string,
fechaini: string,
fechafin: string,
contrini: string,
contrfin: string,
tipo2: TipoPeriodo,
orden: number,
persem: string,
abrev: string,
semanas: number,
ficha: number,
color: string,
estado: string

}

export interface Estudios{
id: number,
nombre: string,
plantillas: Plantilla[]
}

export interface Plantilla{
id: number,
name: string,
documentos: string[]

}

export interface Constancia{
id: number,
autoridad: string,
nombreconst: string,
paga: string,
nombredw: string,
imprimesobre: string,
aplicadatos: string,
maximoid: number,
imprimenotas: string

}

export interface Mensaje{
    id: number,
    clasif: string,
    desc: string,
    nivelbloq: TipoBloqueo,
    notificar: boolean,
    mostrar: boolean,
    mostrarweb: boolean,
    enviocorreo: boolean,
    confidencial: boolean,
    firmaconsejo: boolean,
    sancionable: boolean,
    mostexp: boolean

}

export interface TipoMensaje{
    id: number,
    nombre: string,
    clasificaciones: Mensaje[]
}

export interface TipoBloqueo{
    id: number,
    descripcion: string
}