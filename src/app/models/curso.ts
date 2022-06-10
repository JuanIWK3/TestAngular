import { Aluno } from './aluno';

export interface Curso {
  codigo?: string;
  descricao: string;
  emenda: string;
  alunos?: Aluno[];
}
