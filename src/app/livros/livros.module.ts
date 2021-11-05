import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros.component';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LivrosComponent,
    LivrosCadastroComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LivrosComponent,
  ]
})
export class LivrosModule { }
