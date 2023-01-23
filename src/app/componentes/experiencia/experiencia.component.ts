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

  constructor(private datosPorfolio:PorfolioService, private formbuilder: FormBuilder) { 
     
    this.form = this.formbuilder.group({

      position:["",Validators.required],
      company:["", Validators.required],
      img:["", Validators.required],  
      cliente:["", Validators.required],
      aplicaciones:["", Validators.required],
      consultas: ["", Validators.required],
      reportes:["", Validators.required],
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
}
