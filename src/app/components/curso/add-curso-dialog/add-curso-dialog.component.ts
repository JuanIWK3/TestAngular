import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoDialogData } from 'src/app/interfaces';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-add-curso-dialog',
  templateUrl: './add-curso-dialog.component.html',
  styleUrls: ['./add-curso-dialog.component.scss'],
})
export class AddCursoDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddCursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CursoDialogData,
    private alunoService: CursoService
  ) {}

  ngOnInit(): void {}

  add(): void {
    this.alunoService
      .addCurso(this.data.descricao, this.data.emenda)
      .subscribe(() => {
        this.onNoClick();
        window.location.reload();
      });
  }

  onKeyPress(event: KeyboardEvent) {
    if (this.data.descricao === '') return;
    if (this.data.emenda === '') return;

    if (event.key === 'Enter') {
      this.add();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
