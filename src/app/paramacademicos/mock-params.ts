import { Institucion, TipoEstudio, TipoPeriodo, Periodo, Estudios, Plantilla, Constancia, Mensaje, TipoMensaje, TipoBloqueo } from './objparam';

export var Instituciones: Institucion[] = [{
    id: 0,
    nombre: "PRIVADA DR. RAFAEL BELLOSO CHACIN",
    tiposestudio: [
        {
            id: 0,
            nombre: "Pregrado",
            aplicaperiodo: "SI",
            tipohorario: 7,
            denominacion: "Alumno",
            generanomina: "SI",
            ultficha: 780710,
            nombrecont: "Carrera",
            periodos: [{
                id: 0,
                nombre: "Marzo-1990/Julio-1990",
                tipo1: "NORMAL",
                fechaini: "1990-03-01",
                fechafin: "1990-07-31",
                contrini: "0000-00-00",
                contrfin: "0000-00-00",
                tipo2: {
                    id: 0,
                    nombre: "SEMESTRE",
                    observaciones: "Semestre, dura 6 meses."
                },
                orden: -5,
                persem: "190N",
                abrev: "Mar 1990 - Jul 1990",
                semanas: 0,
                ficha: 1,
                color: "default",
                estado: "ACTIVO"
            },
            {
                id: 1,
                nombre: "AGOSTO 1990",
                tipo1: "INTENSIVO",
                fechaini: "1990-08-01",
                fechafin: "1990-08-31",
                contrini: "0000-00-00",
                contrfin: "0000-00-00",
                tipo2: {
                    id: 0,
                    nombre: "SEMESTRE",
                    observaciones: "Semestre, dura 6 meses."
                },
                orden: -5,
                persem: "190V",
                abrev: "AGOSTO 1990",
                semanas: 0,
                ficha: 0,
                color: "default",
                estado: "ACTIVO"
            }
            ]



        },

    ]
}
];

export var EstudiosList: Estudios[] = [{
    id: 0,
    nombre: "DERECHO",
    plantillas: [{
        id: 0,
        name: "PRE INSCRIPCION PREGRADO",
        documentos: ["FOTOCOPIA DE CERTIFICACIÓN DE NOTAS", "ANTEPROYECTO DE INVESTIGACIÓN", "CONSTANCIA DE TRÁMITE DE TÍTULO DE BACHILLER"]
    },
    {
        id: 1,
        name: "PRE INSCRIPCION MAESTRIA",
        documentos: []
    },
    {
        id: 2,
        name: "PRE INSCRIPCION DOCTORADO",
        documentos: []
    },
    {
        id: 3,
        name: "PRE INSCRIPCION ESPECIALIZACIONES",
        documentos: []
    }


    ]
},
{
    id: 1,
    nombre: "INGENIERÍA EN COMPUTACIÓN",
    plantillas: [{
        id: 0,
        name: "PRE INSCRIPCION PREGRADO",
        documentos: ["FOTOCOPIA DE CERTIFICACIÓN DE NOTAS", "ANTEPROYECTO DE INVESTIGACIÓN", "CONSTANCIA DE TRÁMITE DE TÍTULO DE BACHILLER"]
    },
    {
        id: 1,
        name: "PRE INSCRIPCION MAESTRIA",
        documentos: []
    },
    {
        id: 2,
        name: "PRE INSCRIPCION DOCTORADO",
        documentos: []
    },
    {
        id: 3,
        name: "PRE INSCRIPCION ESPECIALIZACIONES",
        documentos: []
    }


    ]
}];

export var Constancias: Constancia[] = [
    {
        id: 1,
        autoridad: "DR. OSCAR ENRIQUE BELLOSO MEDINA - RECTOR",
        nombreconst: "ESTUDIOS DE INICIO Y FIN EXTERIOR POR EL RECTOR",
        paga: "SI",
        nombredw: "dw_const_est_ext_sem_actual",
        imprimesobre: "SI",
        aplicadatos: "SI",
        maximoid: 148,
        imprimenotas: "0"
    },
    {
        id: 2,
        autoridad: "DR. OSCAR ENRIQUE BELLOSO MEDINA - RECTOR",
        nombreconst: "ESTUDIOS AL EXTERIOR POR EL RECTOR",
        paga: "SI",
        nombredw: "dw_const_est_ext",
        imprimesobre: "NO",
        aplicadatos: "SI",
        maximoid: 1193,
        imprimenotas: "0"
    }

]


export var TiposBloqueo: TipoBloqueo[] = [
    {
        id: 0,
        descripcion: "0 - SIN BLOQUEO"
    },
    {
        id: 1,
        descripcion: "1 - BLOQUEO DE ACCESO"
    },
    {
        id: 2,
        descripcion: "2 - BLOQUEO DE ACCESO + SERVICIOS PRESENCIALES"
    },
    {
        id: 3,
        descripcion: "3 - BLOQUEO DE ACCESO + SERVICIOS PRESENCIALES + INSCRIPCION"
    },
];

export var Mensajes: TipoMensaje[] = [
    {
        id: 0,
        nombre: "INFORMACIÓN DE SISTEMA",
        clasificaciones: []
    },
    {
        id: 1,
        nombre: "MENSAJE DISCIPLINARIO",
        clasificaciones: [
            {
                id: 0,
                clasif: "NOTA DE INVESTIGACIÓN",
                desc: "Mensaje de prueba, Disciplinario, Nota de Investigación",
                nivelbloq: TiposBloqueo[0],
                notificar: false,
                mostrar: false,
                mostrarweb: false,
                enviocorreo: false,
                confidencial: false,
                firmaconsejo: false,
                sancionable: false,
                mostexp: false
            },
            {
                id: 1,
                clasif: "SANCION DISCIPLINARIA",
                desc: "Mensaje de prueba, Disciplinario, Sanción Disciplinaria",
                nivelbloq: TiposBloqueo[0],
                notificar: false,
                mostrar: false,
                mostrarweb: false,
                enviocorreo: false,
                confidencial: false,
                firmaconsejo: false,
                sancionable: false,
                mostexp: false
            }
        ]
    },
    {
        id: 1,
        nombre: "MENSAJE INFORMATIVO",
        clasificaciones: [
            {
                id: 0,
                clasif: "CONTROL DE ESTUDIOS",
                desc: "Mensaje de prueba, Informativo, Control de Estudios",
                nivelbloq: TiposBloqueo[0],
                notificar: false,
                mostrar: false,
                mostrarweb: false,
                enviocorreo: false,
                confidencial: false,
                firmaconsejo: false,
                sancionable: false,
                mostexp: false 
            }
        ]
    },
    {
        id: 3,
        nombre: "RETIRO DE BLOQUEO",
        clasificaciones: []
    }
];
