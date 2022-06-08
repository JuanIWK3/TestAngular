import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCursoDialogComponent } from './add-curso-dialog.component';

describe('AddCursoDialogComponent', () => {
  let component: AddCursoDialogComponent;
  let fixture: ComponentFixture<AddCursoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCursoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCursoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
