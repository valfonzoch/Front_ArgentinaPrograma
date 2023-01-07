import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  url:string='http://localhost:8080/ver/persona/4';
  constructor(private htttp:HttpClient) { }

  obtenerDatos (): Observable<any>{
    return this.htttp.get(this.url);
   
  }
}
/*http://localhost:8080/ver/persona/4*/
/*assets/data/data.json*/