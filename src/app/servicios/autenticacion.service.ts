import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Credenciales, LoginResponse } from '../modelos/auth.models';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private readonly apiUrl = environment.apiUrl;
  private readonly tokenKey = 'auth_token';
  private isAuthenticated = false;

  constructor(private readonly http: HttpClient, private readonly ruta: Router) {
    this.isAuthenticated = !!this.getToken();
  }

  obtenerDatos(): Observable<unknown> {
    return this.http.get(`${this.apiUrl}/ver/persona/${environment.defaultPersonaId}`);
  }

  iniciarSesion(credenciales: Credenciales): Observable<boolean> {
    return this.http.post<LoginResponse | boolean>(`${this.apiUrl}/login`, credenciales).pipe(
      map((response) => this.normalizeLoginResponse(response)),
      tap((authResult) => {
        if (authResult.authenticated) {
          if (authResult.token) {
            this.saveToken(authResult.token);
          }
          this.isAuthenticated = true;
          this.ruta.navigate(['/porfolio']);
          return;
        }

        this.clearSession();
        this.ruta.navigate(['/iniciar-sesion']);
      }),
      map((authResult) => authResult.authenticated)
    );
  }

  logout(): void {
    this.clearSession();
    this.ruta.navigate(['/iniciar-sesion']);
  }

  logged(): boolean {
    return this.isAuthenticated || !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private clearSession(): void {
    this.isAuthenticated = false;
    localStorage.removeItem(this.tokenKey);
  }

  private normalizeLoginResponse(response: LoginResponse | boolean): { authenticated: boolean; token?: string } {
    if (typeof response === 'boolean') {
      return { authenticated: response };
    }

    const token = response.token ?? response.jwt ?? response.accessToken;
    const authenticated = Boolean(
      token ||
      response.ok ||
      response.success ||
      response.authenticated
    );

    return { authenticated, token };
  }
}
