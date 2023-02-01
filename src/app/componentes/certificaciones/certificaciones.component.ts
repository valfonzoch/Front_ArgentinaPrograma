import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent implements OnInit {
  datos: any;
  form:FormGroup;
  cerEdit: any;

  constructor(private datosPorfolio:PorfolioService, private formBuilder: FormBuilder) { 

    this.form = this.formBuilder.group({

      id:["",Validators.required],
      school:["",Validators.required],
      img:["",Validators.required],
      title:["",Validators.required],
      expedition:["",Validators.required],
      certificate:["",Validators.required],})
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.datos=data;
    });
  }
  newCertificaciones(event:Event, cerId:any):void {
    event.preventDefault();
    this.datosPorfolio.agregarCertificado(this.form.value, cerId).subscribe(data =>{
      console.log(data);
    })
}

verCertificado(cerEdit:any): void {

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
    console.log(data);
  });
}

editarCertificacion(): void{
  this.datosPorfolio.editarCertificacion(this.form.value).subscribe(data =>{
  console.log(data);
  this.cerEdit=data;
  
  })
}
borrarCertificacion(id: any, persona:any){
  this.datosPorfolio.borrarCertificacion(id, persona).subscribe(data =>{
  })
}
}
