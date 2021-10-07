import { Injectable } from '@angular/core';
import { Autor, Genero } from './autores.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AutoresService {

  private readonly API = 'http://localhost:8080/biblioteca/resources/autores';

  constructor(
    private httpClient: HttpClient,
  ) {}

  findAll() {
    return this.httpClient.get<Autor[]>(this.API);
  }

  remove(id: number) {
    return this.httpClient.delete<void>(`${this.API}/${id}`);
  }

  save(autor: Autor) {
    return this.httpClient.post<Autor>(this.API, autor);
  }

}
