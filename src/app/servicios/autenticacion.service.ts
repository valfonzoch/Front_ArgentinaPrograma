import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = 'localhost:8080/ver/personas';
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
  }

IniciarSesion(credenciles:any):Observable<any> 
{
return this.http.post(this.url, credenciles).pipe(map(data=>{
  sessionStorage.setItem('currentUser', JSON.stringify(data));
  return data;
}))
}

get UsuarioAutenticado ()
{
return this.currentUserSubject.value;
}
}
