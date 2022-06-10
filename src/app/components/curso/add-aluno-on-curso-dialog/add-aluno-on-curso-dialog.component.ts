import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AlunoOnCursoDialogData, CursoDialogData } from 'src/app/interfaces';
import { Aluno } from 'src/app/models/aluno';
import { Curso } from 'src/app/models/curso';
import { AlunoService } from 'src/app/services/aluno.service';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-add-aluno-on-curso-dialog',
  templateUrl: './add-aluno-on-curso-dialog.component.html',
  styleUrls: ['./add-aluno-on-curso-dialog.component.scss'],
})
export class AddAlunoOnCursoDialogComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddAlunoOnCursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { param: string },
    private alunoService: AlunoService,
    private cursoService: CursoService
  ) {
    this.alunoService.getAlunosSemCurso().subscribe((alunos) => {
      this.alunos = alunos;
    });
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addAluno(codAluno: string): void {
    this.cursoService.addAluno(this.data.param, codAluno).subscribe(() => {
      this.onNoClick();
      window.location.reload();
    });
  }
}
