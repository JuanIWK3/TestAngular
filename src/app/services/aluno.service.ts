import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  url = 'http://localhost:3333/aluno';

  constructor(private http: HttpClient) {}

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.url + '/all');
  }

  getAlunosSemCurso() {
    return this.http.get<Aluno[]>(this.url + '/all-sem-curso');
  }

  getAluno(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(this.url + '/' + id);
  }

  addAluno(nome: string): Observable<Aluno> {
    return this.http.post<Aluno>(this.url + '/add', { nome });
  }

  updateAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(this.url + '/update/' + aluno.codigo, {
      nome: aluno.nome,
    });
  }

  deleteAluno(codigo: string): Observable<Aluno> {
    return this.http.delete<Aluno>(this.url + '/delete/' + codigo);
  }
}
