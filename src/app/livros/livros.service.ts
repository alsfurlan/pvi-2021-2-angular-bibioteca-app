import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from './livros.model';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = 'http://localhost:8080/biblioteca/resources/livros';

  constructor(
    private httpClient: HttpClient,
  ) { }

  findAll() {
    return this.httpClient.get<Livro[]>(this.API);
  }

  findById(id: number) {
    return this.httpClient.get<Livro>(`${this.API}/${id}`);
  }

  remove(id: number) {
    return this.httpClient.delete<void>(`${this.API}/${id}`);
  }

  add(livro: Livro) {
    return this.httpClient.post<Livro>(this.API, livro);
  }

  update(id: number, livro: Livro) {
    return this.httpClient.put<Livro>(`${this.API}/${id}`, livro);
  }
}
