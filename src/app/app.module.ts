import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { CertificacionesComponent } from './componentes/certificaciones/certificaciones.component';
import { PorfolioService } from './servicios/porfolio.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
/*import { InterceptorService } from './servicios/interceptor.service';*/


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,

    ExperienciaComponent,
    EducacionComponent,
    CertificacionesComponent,
    IniciarSesionComponent,
    PorfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
  ],
 /* providers: [PorfolioService,
  {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],*/
 
  bootstrap: [AppComponent]
})
export class AppModule { }
