import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AutenticacionService,
    private readonly router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    return this.authService.logged()
      ? true
      : this.router.createUrlTree(['/iniciar-sesion']);
  }
}
