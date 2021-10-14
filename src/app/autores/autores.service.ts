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

  findById(id: number) {
    return this.httpClient.get<Autor>(`${this.API}/${id}`);
  }

  findAll() {
    return this.httpClient.get<Autor[]>(this.API);
  }

  remove(id: number) {
    return this.httpClient.delete<void>(`${this.API}/${id}`);
  }

  add(autor: Autor) {
    return this.httpClient.post<Autor>(this.API, autor);
  }

  update(id: number, autor: Autor) {
    return this.httpClient.put<Autor>(`${this.API}/${id}`, autor);
  }

}
