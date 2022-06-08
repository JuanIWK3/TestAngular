import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { EditAlunoDialogComponent } from './components/aluno/edit-aluno-dialog/edit-aluno-dialog.component';
import { AddAlunoDialogComponent } from './components/aluno/add-aluno-dialog/add-aluno-dialog.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { EditCursoDialogComponent } from './components/curso/edit-curso-dialog/edit-curso-dialog.component';
import { AddCursoDialogComponent } from './components/curso/add-curso-dialog/add-curso-dialog.component';

//Angular
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

//Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CursoComponent } from './pages/curso/curso.component';

const materialModules = [
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTooltipModule,
];

const components = [
  AppComponent,
  HomeComponent,
  AlunosComponent,
  EditAlunoDialogComponent,
  AddAlunoDialogComponent,
  CursosComponent,
  EditCursoDialogComponent,
  AddCursoDialogComponent,
];

@NgModule({
  declarations: [...components, CursoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    EditAlunoDialogComponent,
    AddAlunoDialogComponent,
    EditCursoDialogComponent,
    AddCursoDialogComponent,
  ],
})
export class AppModule {}
