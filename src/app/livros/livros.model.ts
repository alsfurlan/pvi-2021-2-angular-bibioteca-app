import { Autor } from "../autores/autores.model";

export interface Livro {
  id: number;
  titulo: string;
  subtitulo: string;
  autores: Autor[];
}
