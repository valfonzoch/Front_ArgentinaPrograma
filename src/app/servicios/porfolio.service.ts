import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
 
  constructor(private htttp:HttpClient) { }

  obtenerDatos (): Observable<any>{
    return this.htttp.get('assets/data/data.json');
   /* return this.htttp.get('http://localhost:8080/ver/personas');*/
  }
}
