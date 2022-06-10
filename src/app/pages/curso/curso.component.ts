import { AlunoOnCurso } from './../../interfaces/index';
import { AddAlunoOnCursoDialogComponent } from './../../components/curso/add-aluno-on-curso-dialog/add-aluno-on-curso-dialog.component';
import { CursoService } from 'src/app/services/curso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { Aluno } from 'src/app/models/aluno';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss'],
})
export class CursoComponent implements OnInit {
  param: string;
  curso: Curso;
  alunos: AlunoOnCurso[];

  constructor(
    private router: Router,
    private cursoService: CursoService,
    public dialog: MatDialog
  ) {
    this.param = this.router.url.split('/')[2];
    this.curso = this.getCurso();
    this.alunos = this.getAlunos();
  }

  ngOnInit(): void {}

  getCurso(): Curso {
    this.cursoService.getCurso(this.param).subscribe((curso: Curso) => {
      this.curso = curso;
    });

    return this.curso;
  }

  getAlunos(): AlunoOnCurso[] {
    this.cursoService
      .getAlunos(this.param)
      .subscribe((alunos: AlunoOnCurso[]) => {
        this.alunos = alunos;
      });

    return this.alunos;
  }

  removeAluno(codigo: string): void {
    this.cursoService.removeAluno(codigo).subscribe((curso: Curso) => {
      this.curso = this.getCurso();
      this.alunos = this.getAlunos();
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddAlunoOnCursoDialogComponent, {
      width: '80%',
      maxWidth: '600px',
      data: { param: this.param },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.alunos = this.getAlunos();
    });
  }
}
