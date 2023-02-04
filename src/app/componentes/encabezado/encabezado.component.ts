import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPorfolio: any; 
  form:FormGroup;
  perEdit:any;

  constructor(private datosPorfolio:PorfolioService, private formbuilder: FormBuilder ) {
    
     this.form = this.formbuilder.group({

      id:["",Validators.required],
      name:["",Validators.required],
      backImagen:["",Validators.required],
      imagen:["",Validators.required],
      position:["",Validators.required],
      company:["",Validators.required],
      college:["",Validators.required],
      location:["",Validators.required],
      title1:["",Validators.required],
      about:["",Validators.required],
      title2:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      listEducacion:["",Validators.required],
      listExperiencia:["",Validators.required],
      listCertificaciones:["",Validators.required]
     })
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    });
  }

verPersona(perEdit:any): void {
  
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
    })
    this. perEdit=data;
    console.log(data);
  });
}
editarPersona():void{
  this.datosPorfolio.editarPersona(this.form.value).subscribe(data =>{

  })
}
/*login(){
  return this.autenServe.logged();
}*/
}