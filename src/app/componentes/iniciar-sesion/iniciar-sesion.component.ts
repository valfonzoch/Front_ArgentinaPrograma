import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Credenciales } from 'src/app/modelos/auth.models';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form: FormGroup;
  loginError = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly autenticacionService: AutenticacionService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  onEnviar(event: Event): void {
    event.preventDefault();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const credenciales: Credenciales = {
      email: String(this.form.value.email),
      password: String(this.form.value.password)
    };

    this.autenticacionService.iniciarSesion(credenciales).subscribe((isLogged) => {
      this.loginError = !isLogged;
    });
  }
}
