import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Persona } from 'src/app/modelos/portfolio.models';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPorfolio: Persona | null = null;
  form: FormGroup;
  perEdit: Persona | null = null;

  constructor(private datosPorfolio:PorfolioService, private formbuilder: FormBuilder, private autenticado: AutenticacionService) {
    
     this.form = this.formbuilder.group({

      id: [0, Validators.required],
      name: ['', Validators.required],
      backImagen: ['', Validators.required],
      imagen: ['', Validators.required],
      position: ['', Validators.required],
      company: ['', Validators.required],
      college: ['', Validators.required],
      location: ['', Validators.required],
      title1: ['', Validators.required],
      about: ['', Validators.required],
      title2: ['', Validators.required],
      email: ['', Validators.required],
      password: [''],
      listEducacion: [[]],
      listExperiencia: [[]],
      listCertificaciones: [[]]
     });
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.miPorfolio = data;
    });
  }

verPersona(perEdit: number): void {
  if (!perEdit) {
    return;
  }
  this.datosPorfolio.verPersona(perEdit).subscribe(data => {
    this.form.patchValue({
      id:data.id,
      name:data.name,
      backImagen:data.backImagen,
      imagen:data.imagen,
      position:data.position,
      company:data.company,
      college:data.college,
      location:data.location,
      title1:data.title1,
      about:data.about,
      title2:data.title2,
      email:data.email,
      password:data.password,
      listEducacion:data.listEducacion,
      listExperiencia:data.listExperiencia,
      listCertificaciones:data.listCertificaciones
    });
    this.perEdit = data;
  });
}
editarPersona():void{
  this.datosPorfolio.editarPersona(this.form.value as Persona).subscribe(() =>{
    this.ngOnInit();
  });
}

logueado(){
  return this.autenticado.logged();
 } 
}