import { CursosComponent } from './pages/cursos/cursos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { HomeComponent } from './pages/home/home.component';
import { CursoComponent } from './pages/curso/curso.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:id', component: CursoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
