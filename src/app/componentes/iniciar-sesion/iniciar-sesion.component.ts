import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form:FormGroup;
  login: any;
  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) {
    this.form = this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(8)]],
       }
    )
      }

  ngOnInit(): void {
  }

  get Email()
  {
    return this.form.get('email');
  }
  get Password()
  {
    return this.form.get('password');
  }
  onEnviar(event: Event){
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value.password,this.form.value.email).subscribe(data => {
      this.login = data;
      console.log(data);        
      })
  }
}

export class Credenciales{
  email: any;
  password: any;
}
