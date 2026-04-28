import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Educacion, Persona } from 'src/app/modelos/portfolio.models';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  datos: Persona | null = null;
  form: FormGroup;
  eduEdit: Educacion | null = null;
  
  
  constructor(private datosPorfolio:PorfolioService, private formbuilder:FormBuilder, private autenticado: AutenticacionService) {

    this.form = this.formbuilder.group({

      id: [0, Validators.required],
      college: ['', Validators.required],
      title: ['', Validators.required],
      img: ['', Validators.required],
      description: ['', Validators.required],
      certificate: ['', Validators.required],
   });
   }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.datos = data;
    });
  }

  newEducacion(event: Event, personaId: number | undefined): void {
    event.preventDefault();
    if (!personaId) {
      return;
    }
    this.datosPorfolio.agregarEducacion(this.form.value as Educacion, personaId).subscribe(() => {
      this.ngOnInit();
    });
  }

  verEducacion(eduEdit: number): void {
    this.datosPorfolio.verEducacion(eduEdit).subscribe(data => {
      this.form.patchValue({
        id: data.id,
        college:data.college,
        title:data.title,
        img:data.img,
        description: data.description,
        certificate:data.certificate,
      })
      this.eduEdit = data;
    });
  }

  editarEducacion():void {
    this.datosPorfolio.editarEducacion(this.form.value as Educacion).subscribe(data => {
      this.eduEdit = data;
      this.ngOnInit();
    });
  }

  borrarEducacion(id: number | undefined, persona: number | undefined): void {
    if (!id || !persona) {
      return;
    }
    this.datosPorfolio.borrarEducacion(id, persona).subscribe(() => {
      this.ngOnInit();
    });
}

logueado(){
  return this.autenticado.logged();
 } 
}