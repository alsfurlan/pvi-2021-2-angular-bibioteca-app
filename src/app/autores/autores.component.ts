import { Component, OnInit } from '@angular/core';
import { Autor, Genero } from './autores.model';
import { AutoresService } from './autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css'],
})
export class AutoresComponent implements OnInit {
  autores: Autor[] = [];

  constructor(private autoresService: AutoresService) {
    this.autoresService.findAll().subscribe((autores) => {
      this.autores = autores;
    });
  }

  ngOnInit(): void {}
}
