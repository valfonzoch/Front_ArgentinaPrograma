import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'porfolio', component: PorfolioComponent, canActivate: [AuthGuard] },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: '', redirectTo: 'porfolio', pathMatch: 'full' },
  { path: '**', redirectTo: 'porfolio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
