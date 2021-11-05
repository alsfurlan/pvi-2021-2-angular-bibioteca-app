import { Component, OnInit } from '@angular/core';
import { Livro } from './livros.model';
import { LivrosService } from './livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css'],
})
export class LivrosComponent implements OnInit {
  livros: Livro[] = [];

  constructor(
    private livrosService: LivrosService,
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  excluir(livro: Livro) {
    const { id, titulo } = livro; // destructuring (desetrutração)
    const resposta = confirm(`Você desejar excluir o livro ${id} - ${titulo} '?`); // template string
    if (resposta) {
      this.livrosService.remove(id).subscribe(() => this.listar());
    }
  }

  private listar() {
    this.livrosService
      .findAll()
      .subscribe(livros => this.livros = livros);
  }
}
