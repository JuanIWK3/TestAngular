import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { AlunoDialogData } from '../../../interfaces';

@Component({
  selector: 'app-edit-aluno-dialog',
  templateUrl: './edit-aluno-dialog.component.html',
  styleUrls: ['./edit-aluno-dialog.component.scss'],
})
export class EditAlunoDialogComponent implements OnInit {
  @Input() aluno!: Aluno;
  name: string = '';
  error: string = '';

  constructor(
    public dialogRef: MatDialogRef<EditAlunoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Aluno,
    private alunoService: AlunoService
  ) {}

  update(): void {
    if (this.name === this.data.nome) {
      this.error = 'O novo nome deve ser diferente do atual';
      return;
    }

    this.alunoService
      .updateAluno({ codigo: this.aluno.codigo, nome: this.name })
      .subscribe(() => {
        this.dialogRef.close();
        window.location.reload();
      });
  }

  cleanError() {
    this.error = '';
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onKeyPress(event: KeyboardEvent) {
    setTimeout(() => {
      if (this.name === '') {
        console.log('nome vazio');

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
