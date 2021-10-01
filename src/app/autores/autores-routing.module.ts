import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresCadastroComponent } from './autores-cadastro/autores-cadastro.component';
import { AutoresComponent } from './autores.component';

const routes: Routes = [
  {
    path: '',
    component: AutoresComponent
  },
  {
    path: 'cadastro',
    component: AutoresCadastroComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
