import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  datos: any;
  form: FormGroup;
  eduEdit:any;
  
  constructor(private datosPorfolio:PorfolioService, private formbuilder:FormBuilder) {

    this.form = this.formbuilder.group({

      id:["",Validators.required],
      college:["", Validators.required],
      title:["", Validators.required],
      img:["", Validators.required],
      description: ["", Validators.required],
      certificate:["", Validators.required],

   })

   }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.datos=data;
    });
  }

  newEducacion(event:Event, PersonaId:any):void  {
    event.preventDefault;
    this.datosPorfolio.agregarEducacion(this.form.value, PersonaId).subscribe(data =>{
      console.log(data);
      
    })
  }

  verEducacion(eduEdit:any): void {

    this.datosPorfolio.verEducacion(eduEdit).subscribe(data => {
      this.form.patchValue({
        id: data.id,
        college:data.college,
        title:data.title,
        img:data.img,
        description: data.description,
        certificate:data.certificate,
      })
      this.eduEdit=data;
      console.log(data);
    });
  }

  editarEducacion():void {
    this.datosPorfolio.editarEducacion(this.form.value).subscribe(data => {
      console.log(data);
      this.eduEdit=data;
    })
  }
  borrarEducacion(id:any) {
    this.datosPorfolio.borrarEducacion(id).subscribe(data => {
  })
}
}