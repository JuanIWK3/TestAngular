import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddCursoDialogComponent } from 'src/app/components/curso/add-curso-dialog/add-curso-dialog.component';
import { EditCursoDialogComponent } from 'src/app/components/curso/edit-curso-dialog/edit-curso-dialog.component';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  cursos: Observable<Curso[]>;
  descricao: string = '';
  emenda: string = '';
  search: string = '';

  constructor(private cursoService: CursoService, public dialog: MatDialog) {
    this.cursos = this.cursoService.getCursos();
  }
  ngOnInit(): void {}

  delete(curso: Curso): void {
    this.cursoService
      .deleteCurso(curso.codigo!)
      .subscribe(() => (this.cursos = this.cursoService.getCursos()));
  }

  update(curso: Curso): void {
    this.cursoService
      .updateCurso(curso)
      .subscribe(() => (this.cursos = this.cursoService.getCursos()));
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddCursoDialogComponent, {
      width: '80%',
      maxWidth: '600px',
      data: { descricao: this.descricao, emenda: this.emenda },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.descricao = '';
      this.emenda = '';
    });
  }

  openEditDialog(curso: Curso): void {
    const dialogRef = this.dialog.open(EditCursoDialogComponent, {
      width: '80%',
      maxWidth: '600px',
      data: curso,
    });
    dialogRef.componentInstance.curso = curso;

    dialogRef.afterClosed().subscribe(() => {});
  }
}
