export interface Experiencia {
  id: number;
  position: string;
  company: string;
  img: string;
  cliente: string;
  aplicaciones: string;
  consultas: string;
  reporte: string;
  funciones: string;
  metodologia: string;
}

export interface Educacion {
  id: number;
  college: string;
  title: string;
  img: string;
  description: string;
  certificate: string;
}

export interface Certificacion {
  id: number;
  school: string;
  img: string;
  title: string;
  expedition: string;
  certificate: string;
}

export interface Persona {
  id: number;
  name: string;
  backImagen: string;
  imagen: string;
  position: string;
  company: string;
  college: string;
  location: string;
  title1: string;
  about: string;
  title2: string;
  email: string;
  password?: string;
  listEducacion: Educacion[];
  listExperiencia: Experiencia[];
  listCertificaciones: Certificacion[];
}
