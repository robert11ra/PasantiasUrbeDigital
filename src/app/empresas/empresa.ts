

export interface Ubicacion{
    ciudad: string;
    municipio: string;
    zona: string;  
    nroedif: string;
    piso: string;
    apto: string;
    calle: string;
    sector: string;
}

export interface contactInfo{
    tlf: string;
    fax: string;
    email1: string;
    email2: string;
    website: string;
}

export interface grupoempresa{
    name: string;
}




export interface Empresa{
    id: number;
    name: string;
    RIF: string;
    NIT: string;
    Rsocial: string;
    codPub: string;
    location: Ubicacion;
    contact: contactInfo;
    dirsede: string;
    postal: string;
    sucursales: Sucursal[];
  }

  export interface Sucursal{
    id: number;
    name: string;
    location: Ubicacion;
    status: string;
    tlf: string;
    fax: string;
    email: string;
    dpts: Departamento[];
  }

  export interface Departamento{
      id: number;
      name: string;
      desc: string;
      tlfext: string;
      location: string;
      email: string;
  }

