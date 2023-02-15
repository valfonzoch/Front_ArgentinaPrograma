import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Credenciales } from '../componentes/iniciar-sesion/iniciar-sesion.component';



@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = 'http://localhost:8080'; 
  login: any;
  
  constructor(private http:HttpClient, private ruta:Router) { 
    this.login = false;
    console.log("El servicio de autenticación está corriendo");
  }

  ObtenerDatos(): Observable<any>{
    return  this.http.get(this.url + "/ver/persona/4");
  }

 IniciarSesion(password: any, email: any):Observable<any>{
    let credenciales = new Credenciales();
    credenciales.password = password;
    credenciales.email = email;
    return this.http.post(this.url + "/login", credenciales).pipe(map(data => {
      this.login = data;
      if (this.login == true){
        console.log("está logueado");
        this.ruta.navigate(['/porfolio']);
      } else if (this.login == false){
        console.log (this.login);
        console.log("no está logueado");
        this.ruta.navigate(['/iniciar-sesion']);  
        alert("Alguno de los datos son incorrectos");    
      }
    }));

  }

  logged(){
    return this.login == true; 
  }
}
