import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Experiencia, Persona } from 'src/app/modelos/portfolio.models';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  datos: Persona | null = null;
  form: FormGroup;
  expEdit: Experiencia | null = null;

  constructor(private datosPorfolio:PorfolioService, private formbuilder: FormBuilder,private autenticado: AutenticacionService) { 
     
    this.form = this.formbuilder.group({

      id: [0, Validators.required],
      position: ['', Validators.required],
      company: ['', Validators.required],
      img: ['', Validators.required],
      cliente: ['', Validators.required],
      aplicaciones: ['', Validators.required],
      consultas: ['', Validators.required],
      reporte: ['', Validators.required],
      funciones: ['', Validators.required],
      metodologia: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.datos = data;
    });
  }
  newExperiencia(event: Event, expId: number | undefined): void {
    event.preventDefault();
    if (!expId) {
      return;
    }
    this.datosPorfolio.agregarExperiencia(this.form.value as Experiencia, expId).subscribe(() => {
      this.ngOnInit();
    });
  }

  verExperiencia(expEdit: number): void {
    this.datosPorfolio.verExperiencia(expEdit).subscribe(data => {
      this.form.patchValue({
        id: data.id,
        position:data.position,
        company:data.company,
        img: data.img,  
        cliente:data.cliente,
        aplicaciones:data.aplicaciones,
        consultas:data.consultas,
        reporte:data.reporte,
        funciones:data.funciones,
        metodologia:data.metodologia,
      })
      this.expEdit = data;
    });
  }
    
  editarExperiencia(): void{
    this.datosPorfolio.editarExperiencia(this.form.value as Experiencia).subscribe(data => {
      this.expEdit = data;
      this.ngOnInit();
  });
}
borrarExperiencia(id: number | undefined, persona: number | undefined): void {
  if (!id || !persona) {
    return;
  }
  this.datosPorfolio.borrarExperiencia(id, persona).subscribe(data => {
    this.ngOnInit();
  });
  
}

logueado(){
  return this.autenticado.logged();
 } 
}