import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCursoDialogComponent } from './edit-curso-dialog.component';

describe('EditCursoDialogComponent', () => {
  let component: EditCursoDialogComponent;
  let fixture: ComponentFixture<EditCursoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCursoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCursoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
