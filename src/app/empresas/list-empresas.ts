import { Empresa, Sucursal, Departamento, grupoempresa } from "./empresa";

export var Empresas: Empresa[] = [
    {
    id: 0,
    name: 'Empresa de prueba 1',
    RIF: "J-123456789",
    NIT: "NIT",
    Rsocial: "Empresa de Prueba Uno C.A.",
    codPub: "EDP1",
    location:{
        ciudad: 'Maracaibo',
        municipio: 'Maracaibo',
        zona: 'Zona Norte',
        nroedif: 'Nro. Edificio',
        piso: ' ',
        apto: ' ',
        calle: 'Calle',
        sector: 'Sector'
    },
    contact: {
        tlf: '0424-1234567',
        fax: '+584241234567',
        email1: 'CorreoEmpresa1@Empresa1.com',
        email2: 'CorreoDirectivo1@Empresa1.com',
        website: 'www.empresa1.com'
    },
    dirsede: 'Dirección de la sede principal.',
    postal: '4001',
    sucursales: [
        {   id: 0,
            name: 'Sucursal 1 Empresa 1',
            fax: '+584244444444',
            tlf: '04144444444',
            location: {
                ciudad: 'Maracaibo',
                municipio: 'Maracaibo',
                zona: 'Zona Norte',
                nroedif: 'Nro. Edificio',
                piso: ' ',
                apto: ' ',
                calle: 'Calle',
                sector: 'Sector'
            },
            status: 'ACTIVA',
            email: 'sucursal1empresa1@empresa1.com',
            dpts: [
                {
                    id: 0,
                    name: 'Dpto 1 Sucursal 1 Empresa 1',
                    desc: 'Departamento 1 de la Sucursal 1 de la Empresa 1',
                    tlfext: '105',
                    location: 'Ubicación del Departamento 1',
                    email: 'emp1suc1dep1@Empresa1.com'

            },
            {
                    id: 1,
                    name: 'Dpto 2 Sucursal 1 Empresa 1',
                    desc: 'Departamento 2 de la Sucursal 1 de la Empresa 1',
                    tlfext: '106',
                    location: 'Ubicación del Departamento 2',
                    email: 'emp1suc1dep2@Empresa1.com'
            }
        ]

        },
        {   
            id: 1,
            name: 'Sucursal 2 Empresa 1',
            fax: '+584243333333',
            tlf: '04143333333',
            location: {
                ciudad: 'Maracaibo',
                municipio: 'Maracaibo',
                zona: 'Zona Norte',
                nroedif: 'Nro. Edificio',
                piso: ' ',
                apto: ' ',
                calle: 'Calle',
                sector: 'Sector'
            },
            status: 'INACTIVA',
            email: 'sucursal2empresa1@empresa1.com',
            dpts: [
                {
                    id: 0,
                    name: 'Dpto 1 Sucursal 2 Empresa 1',
                    desc: 'Departamento 1 de la Sucursal 2 de la Empresa 1',
                    tlfext: '205',
                    location: 'Ubicación del Departamento 1',
                    email: 'emp1suc2dep1@Empresa1.com'

            },
            {       
                    id: 1,
                    name: 'Dpto 2 Sucursal 2 Empresa 1',
                    desc: 'Departamento 2 de la Sucursal 2 de la Empresa 1',
                    tlfext: '206',
                    location: 'Ubicación del Departamento 2',
                    email: 'emp1suc2dep2@Empresa1.com'
            }
        ]
        },

    ]
},
{
    id: 1,
    name: 'Empresa de prueba 2',
    RIF: "J-987654321",
    NIT: "NIT",
    Rsocial: "Empresa de Prueba Dos C.A.",
    codPub: "EDP2",
    location:{
        ciudad: 'Maracaibo',
        municipio: 'Maracaibo',
        zona: 'Zona Norte',
        nroedif: 'Nro. Edificio',
        piso: ' ',
        apto: ' ',
        calle: 'Calle',
        sector: 'Sector'
    },
    contact: {
        tlf: '0416-7654321',
        fax: '+584247654321',
        email1: 'CorreoEmpresa2@Empresa2.com',
        email2: 'CorreoDirectivo2@Empresa2.com',
        website: 'www.empresa1.com'
    },
    dirsede: 'Dirección de la sede principal.',
    postal: '4001',
    sucursales: [
        {
            id: 0,
            name: 'Sucursal 1 Empresa 2',
            fax: '+584242222222',
            tlf: '04142222222',
            location: {
                ciudad: 'Maracaibo',
                municipio: 'Maracaibo',
                zona: 'Zona Norte',
                nroedif: 'Nro. Edificio',
                piso: ' ',
                apto: ' ',
                calle: 'Calle',
                sector: 'Sector'
            },
            status: 'ACTIVA',
            email: 'sucursal1empresa2@empresa2.com',
            dpts: [
                {   id: 0,
                    name: 'Dpto 1 Sucursal 1 Empresa 2',
                    desc: 'Departamento 1 de la Sucursal 1 de la Empresa 2',
                    tlfext: '305',
                    location: 'Ubicación del Departamento 1',
                    email: 'emp2suc1dep1@Empresa2.com'

            },
            {       id: 1,
                    name: 'Dpto 2 Sucursal 1 Empresa 1',
                    desc: 'Departamento 2 de la Sucursal 1 de la Empresa 2',
                    tlfext: '306',
                    location: 'Ubicación del Departamento 2',
                    email: 'emp2suc1dep2@Empresa2.com'
            }
        ]
        },
        {   
            id: 1,
            name: 'Sucursal 2 Empresa 2',
            fax: '+584241111111',
            tlf: '04141111111',
            location: {
                ciudad: 'Maracaibo',
                municipio: 'Maracaibo',
                zona: 'Zona Norte',
                nroedif: 'Nro. Edificio',
                piso: ' ',
                apto: ' ',
                calle: 'Calle',
                sector: 'Sector'
            },
            status: 'INACTIVA',
            email: 'sucursal2empresa2@empresa2.com',
            dpts: [
                {
                    id: 0,
                    name: 'Dpto 1 Sucursal 2 Empresa 2',
                    desc: 'Departamento 1 de la Sucursal 2 de la Empresa 2',
                    tlfext: '405',
                    location: 'Ubicación del Departamento 1',
                    email: 'emp2suc2dep1@Empresa2.com'

            },
            {       id: 1,
                    name: 'Dpto 2 Sucursal 2 Empresa 1',
                    desc: 'Departamento 2 de la Sucursal 2 de la Empresa 2',
                    tlfext: '406',
                    location: 'Ubicación del Departamento 2',
                    email: 'emp2suc2dep2@Empresa2.com'
            }
        ]
        },

    ]
}



];


export var GruposEmpresas: grupoempresa[] = [
    {name: "Grupoempresa1"},
    {name: "Grupoempresa2"}
];
