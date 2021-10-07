import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Genero } from '../autores.model';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-autores-cadastro',
  templateUrl: './autores-cadastro.component.html',
  styleUrls: ['./autores-cadastro.component.css'],
})
export class AutoresCadastroComponent implements OnInit {
  autoresForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private autoresService: AutoresService
  ) {
    this.autoresForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      nacionalidade: [''],
      genero: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  salvar() {
    console.log(this.autoresForm.value);

    this.autoresService.save(this.autoresForm.value).subscribe(
      () => {
        alert('Autor salvo com sucesso!');
      },
      () => {
        alert('Erro ao salvar o autor');
      }
    );
  }
}
