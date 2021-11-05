import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-autores-cadastro',
  templateUrl: './autores-cadastro.component.html',
  styleUrls: ['./autores-cadastro.component.css'],
})
export class AutoresCadastroComponent implements OnInit {
  autoresForm: FormGroup;
  autorId: number;

  constructor(
    private formBuilder: FormBuilder,
    private autoresService: AutoresService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.autorId = 0;
    this.autoresForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      nacionalidade: [''],
      genero: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.autorId = parseInt(id);
      this.autoresService
        .findById(this.autorId)
        .subscribe((autor) => {
          this.autoresForm.patchValue({
            nome: autor.nome,
            nacionalidade: autor.nacionalidade,
            genero: autor.genero,
          });
        });
    }
  }

  salvar() {
    if (this.autorId) {
      this.autoresService
        .update(this.autorId, this.autoresForm.value)
        .subscribe(
          () => {
            alert('Autor atualizado com sucesso');
            this.router.navigate(['./autores']);
          },
          () => alert('Erro ao atualizar o autor')
        );
    } else {
      this.autoresService.add(this.autoresForm.value).subscribe(
        () => {
          alert('Autor salvo com sucesso!');
          this.router.navigate(['./autores']);
        },
        () => alert('Erro ao salvar o autor')
      );
    }
  }
}
