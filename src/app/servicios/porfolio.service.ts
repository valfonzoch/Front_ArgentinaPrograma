import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  url:string;
  constructor(private http:HttpClient) { 
    this.url = 'https://backvane.onrender.com';              /* Para pruebas locales 'http://localhost:8080' ; */
  }
     /*Persona*/
  obtenerDatos (): Observable<any>{
    return this.http.get(this.url+'/ver/persona/4');
  }
  verPersona(id:any): Observable<any>{
    return this.http.get(this.url+'/ver/persona/'+id);
  }
  editarPersona(persona: any): Observable<any>{
    return this.http.put(this.url+'/update/persona',persona);
  }
    /*Educacion*/
  

  agregarEducacion(form:any, PersonaId:any): Observable<any>{
    return this.http.post(this.url+'/new/educacion/'+ PersonaId, form); 
  }
  verEducacion(id:any): Observable<any>{
    return this.http.get(this.url+'/ver/educacion/'+ id);
  }
  editarEducacion(educacion:any): Observable<any>{
    return this.http.put(this.url+'/update/educacion', educacion);
  }
  borrarEducacion(id:any, persona: any ):Observable<any>{
    return this.http.delete(this.url+'/delete/educacion/'+id+'/'+ persona );
  }

  /*Experiencia*/

  agregarExperiencia(form:any, expId:any): Observable<any>{
    return this.http.post(this.url+'/new/experiencia/'+ expId, form); 
  }
  verExperiencia(id:any): Observable<any>{
    return this.http.get(this.url+'/ver/experiencia/'+ id);
  }
  editarExperiencia(experiencia: any): Observable<any>{
    return this.http.put(this.url+'/update/experiencia', experiencia);
  }
  borrarExperiencia(id:any, persona:any): Observable<any>{
    return this.http.delete(this.url+'/delete/experiencia/'+ id +"/"+ persona);
  }

  /*Certificados*/

  agregarCertificado(form:any, cerId:any): Observable<any>{
    return this.http.post(this.url+'/new/certificaciones/'+ cerId, form); 
  }
  verCertificado(id:any): Observable<any>{
    return this.http.get(this.url+'/ver/certificaciones/'+ id);
  }

  editarCertificacion(certificacciones: any): Observable<any>{
    return this.http.put(this.url+'/update/certificaciones', certificacciones);
  }
  
  borrarCertificacion(id: any, persona: any): Observable<any>{
    return this.http.delete(this.url+'/delete/certificaciones/'+ id +"/"+ persona);
  }
}














