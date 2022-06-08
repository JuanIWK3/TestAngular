import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { AddAlunoDialogComponent } from '../../components/aluno/add-aluno-dialog/add-aluno-dialog.component';
import { EditAlunoDialogComponent } from '../../components/aluno/edit-aluno-dialog/edit-aluno-dialog.component';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],
})
export class AlunosComponent {
  alunos: Observable<Aluno[]>;
  name: string = '';
  search: string = '';

  constructor(private alunoService: AlunoService, public dialog: MatDialog) {
    this.alunos = this.alunoService.getAlunos();
  }

  delete(aluno: Aluno): void {
    this.alunoService
      .deleteAluno(aluno.codigo!)
      .subscribe(() => (this.alunos = this.alunoService.getAlunos()));
  }

  update(aluno: Aluno): void {
    this.alunoService
      .updateAluno(aluno)
      .subscribe(() => (this.alunos = this.alunoService.getAlunos()));
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddAlunoDialogComponent, {
      width: '80%',
      maxWidth: '400px',
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.name = '';
    });
  }

  openEditDialog(aluno: Aluno): void {
    const dialogRef = this.dialog.open(EditAlunoDialogComponent, {
      width: '80%',
      maxWidth: '400px',
      data: aluno,
    });
    dialogRef.componentInstance.aluno = aluno;

    dialogRef.afterClosed().subscribe(() => {});
  }
}
