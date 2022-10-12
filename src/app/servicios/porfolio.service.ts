import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
 
  constructor(private htttp:HttpClient) { }

  obtenerDatos (): Observable<any>{
    return this.htttp.get('./assets/data/data.json');
  }
}
