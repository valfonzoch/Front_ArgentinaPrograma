import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Certificacion, Educacion, Experiencia, Persona } from '../modelos/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  private readonly url = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  obtenerDatos(): Observable<Persona> {
    return this.http.get<Persona>(`${this.url}/ver/persona/${environment.defaultPersonaId}`);
  }

  verPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.url}/ver/persona/${id}`);
  }

  editarPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.url}/update/persona`, persona);
  }

  agregarEducacion(form: Educacion, personaId: number): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.url}/new/educacion/${personaId}`, form);
  }

  verEducacion(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(`${this.url}/ver/educacion/${id}`);
  }

  editarEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(`${this.url}/update/educacion`, educacion);
  }

  borrarEducacion(id: number, persona: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/educacion/${id}/${persona}`);
  }

  agregarExperiencia(form: Experiencia, expId: number): Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.url}/new/experiencia/${expId}`, form);
  }

  verExperiencia(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(`${this.url}/ver/experiencia/${id}`);
  }

  editarExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(`${this.url}/update/experiencia`, experiencia);
  }

  borrarExperiencia(id: number, persona: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/experiencia/${id}/${persona}`);
  }

  agregarCertificado(form: Certificacion, cerId: number): Observable<Certificacion> {
    return this.http.post<Certificacion>(`${this.url}/new/certificaciones/${cerId}`, form);
  }

  verCertificado(id: number): Observable<Certificacion> {
    return this.http.get<Certificacion>(`${this.url}/ver/certificaciones/${id}`);
  }

  editarCertificacion(certificaciones: Certificacion): Observable<Certificacion> {
    return this.http.put<Certificacion>(`${this.url}/update/certificaciones`, certificaciones);
  }

  borrarCertificacion(id: number, persona: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/certificaciones/${id}/${persona}`);
  }
}














