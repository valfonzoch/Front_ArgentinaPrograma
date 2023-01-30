import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  datos: any;
  form: FormGroup;
  expEdit:any;

  constructor(private datosPorfolio:PorfolioService, private formbuilder: FormBuilder) { 
     
    this.form = this.formbuilder.group({

      id:["",Validators.required], 
      position:["",Validators.required],
      company:["", Validators.required],
      img:["", Validators.required],  
      cliente:["", Validators.required],
      aplicaciones:["", Validators.required],
      consultas: ["", Validators.required],
      reporte:["", Validators.required],
      funciones:["", Validators.required],
      metodologia:["", Validators.required],
    })
  }
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.datos=data;
    });
  }
  newExperiencia(event:Event,expId:any):void {
    event.preventDefault;
    this.datosPorfolio.agregarExperiencia(this.form.value ,expId).subscribe(data => {
      console.log(data);
    })
  }

  verExperiencia(expEdit: any): void {
    
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
      this.expEdit=data;
      console.log(data);
    });
  }
    
  editarExperiencia(): void{
    this.datosPorfolio.editarExperiencia(this.form.value).subscribe(data => {
      console.log(data);
      this.expEdit=data;
  })
}
borrarExperiencia(id:any, persona:any) {
  this.datosPorfolio.borrarExperiencia(id, persona).subscribe(data => {
  })
}
}