import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';

const routes: Routes = [
  {path: "cursos/cadastrar" , component: CadastrarCursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
