import { Injectable } from '@angular/core';
import { Categoria, Curso, Professor } from 'src/app.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private list_curso = null;
  private categorias = null;
  private professores = null;
  list_aula = [];

  novoId_curso = 1;

  c1 = new Categoria(1, "Esporte")
  c2 = new Categoria(2, "Informatica")

  p1 = new Professor(1,"Fabio")
  p2 = new Professor(2,"Fabiano")



  constructor() {
    this.list_curso = [];
    this.categorias = [];
    this.professores = []
    this.categorias.push(this.c1);
    this.categorias.push(this.c2)
    this.professores.push(this.p1)
    this.professores.push(this.p2)
   }

  todas(): Array<Curso>{
    return this.list_curso;
  }

  todas_categorias(): Array<Categoria>{
    return this.categorias;
  }

  todos_professores():Array<Professor>{
    return this.professores;
  }


  salvar(titulo: string, categoria:number, descricao: string, professores:Array<Professor>){

    let cat = this.buscar_categoria(categoria)

    const curso = new Curso(this.novoId_curso,cat,
       titulo, descricao,professores)

    this.list_curso.push(curso)
    this.novoId_curso++
  }

  buscar_categoria(id:number){
    let cat = null;
    cat = this.categorias.filter(cat => cat.id == id);
    return cat[0];
  }

  buscar_professor(id:number){
    let prof = null;
    prof = this.professores.filter(prof => prof.id == id)
    return prof[0]
  }
}
