import { Injectable } from '@angular/core';
import { Autor, Genero } from './autores.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AutoresService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  findAll() {
    return this.httpClient.get<Autor[]>('http://localhost:8080/biblioteca/resources/autores');
    // return [
    //   {
    //     id: 1,
    //     nome: 'Paulo Coelho',
    //     nacionalidade: 'brasileiro',
    //     genero: Genero.MASCULINO,
    //   },
    //   {
    //     id: 2,
    //     nome: 'Clarice Lispector',
    //     nacionalidade: 'ucraniana',
    //     genero: Genero.FEMININO,
    //   },
    // ];
  }
}
