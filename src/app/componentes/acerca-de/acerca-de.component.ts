import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  miPorfolio: any; 
  
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    });
  }

cambiar_parrafo(text:any){

};

}

/*<script>
    function cambiar_parrafo(){
        document.getElementById("edit-acercade").style.display="block";
        let texto = document.getElementById("text-acercade").innerText;
        alert("Modificaste tus datos");
        console.log(texto);

    };

    function myFuntion2 (valor){
        document.getElementById("text-acercade").innerText= valor;
    };
</script>*/
    
   