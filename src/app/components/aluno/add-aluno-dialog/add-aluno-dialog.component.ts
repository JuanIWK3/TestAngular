import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlunoDialogData } from 'src/app/interfaces';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-add-aluno-dialog',
  templateUrl: './add-aluno-dialog.component.html',
  styleUrls: ['./add-aluno-dialog.component.scss'],
})
export class AddAlunoDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddAlunoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AlunoDialogData,
    private alunoService: AlunoService
  ) {}

  add(): void {
    this.alunoService.addAluno(this.data.name).subscribe(() => {
      this.onNoClick();
      window.location.reload();
    });
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onKeyPress(event: KeyboardEvent) {
    if (this.data.name === '') return;

    if (event.key === 'Enter') {
      this.add();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
