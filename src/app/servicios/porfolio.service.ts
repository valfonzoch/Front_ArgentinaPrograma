import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  url:string;
  constructor(private http:HttpClient) { 
    this.url = 'http://localhost:8080/';
  }

  obtenerDatos (): Observable<any>{
    return this.http.get(this.url+'ver/persona/4');
  }

  agregarEducacion(form:any, PersonaId:any): Observable<any>{
    return this.http.post(this.url+'new/educacion/'+ PersonaId, form); // @PostMapping("new/educacion/{id}")
  }

  agregarExperiencia(form:any, expId:any): Observable<any>{
    return this.http.post(this.url+'new/experiencia/'+ expId, form); 
  }
}















/*tengo que crear uno parecido que me llame a educacion, certificados experiencia etc, porque ete servicio necesita conectarse con el backend, el que hice arriba es la funcion que sirve para comunicarse con persona*/




/*http://localhost:8080/ver/persona/4*/
/*assets/data/data.json*/