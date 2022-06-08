import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-edit-curso-dialog',
  templateUrl: './edit-curso-dialog.component.html',
  styleUrls: ['./edit-curso-dialog.component.scss'],
})
export class EditCursoDialogComponent implements OnInit {
  @Input() curso!: Curso;
  descricao: string = '';
  emenda: string = '';
  error: string = '';

  constructor(
    public dialogRef: MatDialogRef<EditCursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso,
    private cursoService: CursoService
  ) {}

  update(): void {
    this.cursoService
      .updateCurso({
        codigo: this.curso.codigo,
        descricao: this.descricao,
        emenda: this.emenda,
      })
      .subscribe(() => {
        this.dialogRef.close();
        window.location.reload();
      });
  }

  cleanError() {
    this.error = '';
  }

  ngOnInit(): void {}

  onKeyPress(event: KeyboardEvent) {
    setTimeout(() => {
      if (this.descricao === '') {
        console.log('descricao vazia');
        return;
      }

      if (this.emenda === '') {
        console.log('emenda vazia');
        return;
      }

      if (event.key === 'Enter') {
        this.update();
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
