import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';

const routes: Routes = [
  {path:'porfolio', component:PorfolioComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'',redirectTo:'iniciar-sesion',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
