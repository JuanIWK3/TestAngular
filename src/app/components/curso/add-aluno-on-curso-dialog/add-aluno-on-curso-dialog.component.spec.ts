import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlunoOnCursoDialogComponent } from './add-aluno-on-curso-dialog.component';

describe('AddAlunoOnCursoDialogComponent', () => {
  let component: AddAlunoOnCursoDialogComponent;
  let fixture: ComponentFixture<AddAlunoOnCursoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAlunoOnCursoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAlunoOnCursoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
