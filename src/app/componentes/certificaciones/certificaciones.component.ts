import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Certificacion, Persona } from 'src/app/modelos/portfolio.models';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent implements OnInit {
  datos: Persona | null = null;
  form: FormGroup;
  cerEdit: Certificacion | null = null;

  constructor(private datosPorfolio:PorfolioService, private formBuilder: FormBuilder,private autenticado: AutenticacionService) { 

    this.form = this.formBuilder.group({

      id: [0, Validators.required],
      school: ['', Validators.required],
      img: ['', Validators.required],
      title: ['', Validators.required],
      expedition: ['', Validators.required],
      certificate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.datos = data;
    });
  }

  newCertificaciones(event: Event, cerId: number | undefined): void {
    event.preventDefault();
    if (!cerId) {
      return;
    }
    this.datosPorfolio.agregarCertificado(this.form.value as Certificacion, cerId).subscribe(() => {
      this.ngOnInit();
    });
}

verCertificado(cerEdit: number): void {
  this.datosPorfolio.verCertificado(cerEdit).subscribe(data => { 
    this.form.patchValue({
      id:data.id,
      school:data.school,
      img:data.img,
      title:data.title,
      expedition:data.expedition,
      certificate:data.certificate,
    })
    this.cerEdit = data;
  });
}

editarCertificacion(): void{
  this.datosPorfolio.editarCertificacion(this.form.value as Certificacion).subscribe(data => {
  this.cerEdit = data;
  this.ngOnInit();
  });
}

borrarCertificacion(id: number | undefined, persona: number | undefined): void {
  if (!id || !persona) {
    return;
  }
  this.datosPorfolio.borrarCertificacion(id, persona).subscribe(() => {
    this.ngOnInit();
  });
}

logueado(){
  return this.autenticado.logged();
 } 
}
