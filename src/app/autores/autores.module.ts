import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresComponent } from './autores.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AutoresComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    HttpClientModule,
  ]
})
export class AutoresModule { }
