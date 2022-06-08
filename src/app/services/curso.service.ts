import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  url = 'http://localhost:3333/curso';

  constructor(private http: HttpClient) {}

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url + '/all');
  }

  getCurso(id: number): Observable<Curso> {
    return this.http.get<Curso>(this.url + '/' + id);
  }

  addCurso(descricao: string, emenda: string): Observable<Curso> {
    return this.http.post<Curso>(this.url + '/add', { descricao, emenda });
  }

  updateCurso(curso: Curso): Observable<Curso> {
    console.log('updateCurso', curso);
    return this.http.put<Curso>(this.url + '/update/' + curso.codigo, {
      descricao: curso.descricao,
      emenda: curso.emenda,
    });
  }

  deleteCurso(codigo: string): Observable<Curso> {
    return this.http.delete<Curso>(this.url + '/delete/' + codigo);
  }
}
