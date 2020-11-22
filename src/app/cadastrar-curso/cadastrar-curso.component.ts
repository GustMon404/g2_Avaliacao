import { Component, OnInit } from '@angular/core';
import { Categoria, Professor } from 'src/app.model';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.css']
})
export class CadastrarCursoComponent implements OnInit {

  titulo = null;
  descricao = null;
  categoria = 1;
  professores= [];
  professor = 1;

  list_curso = [];
  list_cat = [];
  list_prof = [];

  constructor(private cursoService: CursoService) {
    this.cursoService.carregarCursos(
      () => this.list_curso = this.cursoService.todas()
    );
    this.list_cat = cursoService.todas_categorias();
    this.list_prof = cursoService.todos_professores();
   }

  ngOnInit(): void {
  }
  
  adicionar_prof(){
    let prof = this.cursoService.buscar_professor(this.professor)
    this.professores.push(prof);
    this.professor = 1;
  }


  salvar(){
    this.cursoService.salvar(this.titulo, this.categoria, this.descricao, this.professores)
    this.titulo = null;
    this.descricao = null;
    this.categoria = 1;
    console.log(this.professores)
    this.professores = []
  }

  delete(){
    
  }
}
