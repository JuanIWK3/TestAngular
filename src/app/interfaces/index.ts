import { Aluno } from '../models/aluno';

export interface AlunoDialogData {
  name: string;
}

export interface CursoDialogData {
  descricao: string;
  emenda: string;
}

export interface AlunoOnCursoDialogData {
  addAluno: (codAluno: string) => void;
}

export interface AlunoOnCurso {
  codigo: string;
  alunoCodigo: string;
  createdAt: string;
  updatedAt: string;
  aluno: Aluno;
}
