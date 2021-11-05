import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';
import { LivrosComponent } from './livros.component';

const routes: Routes = [
  {
    path: '',
    component: LivrosComponent
  },
  {
    path: 'cadastro',
    component: LivrosCadastroComponent,
  },
  {
    path: 'edicao/:id',
    component: LivrosCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
