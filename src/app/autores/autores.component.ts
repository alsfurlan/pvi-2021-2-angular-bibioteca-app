import { Component, OnInit } from '@angular/core';
import { Autor, Genero } from './autores.model';
import { AutoresService } from './autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css'],
})
export class AutoresComponent implements OnInit {
  autores: Autor[];

  constructor(private autoresService: AutoresService) {
    this.autores = [];
  }

  ngOnInit(): void {
    this.listar();
  }

  excluir(autor: Autor) {
    const { id, nome } = autor; // destructuring (desetrutração)
    const resposta = confirm(`Você desejar excluir o autor ${id} - ${nome} '?`); // template string
    if (resposta) {
      this.autoresService.remove(id).subscribe(() => this.listar());
    }
  }

  private listar() {
    this.autoresService.findAll().subscribe((autores) => {
      this.autores = autores;
    });
  }
}
