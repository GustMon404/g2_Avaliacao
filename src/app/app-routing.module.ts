import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulasComponent } from './aulas/aulas.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';

const routes: Routes = [
  {path: "cursos/cadastrar" , component: CadastrarCursoComponent},
  {path: "cursos/aulas", component: AulasComponent},
  {path: "cursos/aulas/:id", component: DetalheCursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
