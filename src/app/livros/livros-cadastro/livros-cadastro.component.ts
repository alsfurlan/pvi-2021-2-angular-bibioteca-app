import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivrosService } from '../livros.service';

@Component({
  selector: 'app-livros-cadastro',
  templateUrl: './livros-cadastro.component.html',
  styleUrls: ['./livros-cadastro.component.css']
})
export class LivrosCadastroComponent implements OnInit {
  livroId: number;
  livrosForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private livrosService: LivrosService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.livroId = 0;
    this.livrosForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      subtitulo: ['']
    });
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.livroId = parseInt(id);
      this.livrosService
        .findById(this.livroId)
        .subscribe((livro) => {
          this.livrosForm.patchValue({
            titulo: livro.titulo,
            subtitulo: livro.subtitulo,
          });
        });
    }
  }

  salvar() {
    if (this.livroId) {
      this.livrosService
        .update(this.livroId, this.livrosForm.value)
        .subscribe(
          () => {
            alert('Livro atualizado com sucesso');
            this.router.navigate(['./livros']);
          },
          () => alert('Erro ao atualizar o livro')
        );
    } else {
      this.livrosService.add(this.livrosForm.value).subscribe(
        () => {
          alert('Livro salvo com sucesso!');
          this.router.navigate(['./livros']);
        },
        () => alert('Erro ao salvar o livro')
      );
    }
  }

}
