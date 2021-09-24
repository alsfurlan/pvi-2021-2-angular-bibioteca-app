export interface Autor {
  id: number;
  nome: string;
  nacionalidade: string;
  genero: Genero;
}

export enum Genero {
  FEMININO = 'FEMININO',
  MASCULINO = 'MASCULINO'
}

