import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresComponent } from './autores.component';
import { HttpClientModule } from '@angular/common/http';
import { AutoresCadastroComponent } from './autores-cadastro/autores-cadastro.component';


@NgModule({
  declarations: [
    AutoresComponent,
    AutoresCadastroComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    HttpClientModule,
  ]
})
export class AutoresModule { }
