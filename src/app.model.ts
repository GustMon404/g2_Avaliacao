import { strict } from 'assert';

export class Professor{
    id:number;
    nome: string;
    constructor(id:number, nome:string){
        this.id = id
        this.nome = nome
    }
}

export class Categoria{
    id: number;
    categoria: string;
    constructor(id: number, categoria:string){
        this.id = id;
        this.categoria = categoria;
    }
}

export class Curso{
    id: number;
    categoria: Categoria;
    titulo: string;
    descricao: string;
    professor: Array<Professor>
    constructor(id: number,categoria: Categoria, titulo: string,descricao: string, professor: Array<Professor>){
        this.id= id;
        this.categoria = categoria;
        this.titulo = titulo;
        this.descricao = descricao;
        this.professor = professor;
    }
}

export class Aula{
    id: number;
    id_curso: number;
    titulo: string;
    tempo: string;
    exercicio: string;
    curso: Curso;

    constructor(id: number, id_curso: number, titulo: string, tempo: string, exercicio: string, curso: Curso){
        this.id = id;
        this.id_curso = id_curso;
        this.titulo = titulo;
        this.tempo = tempo;
        this.exercicio = exercicio;
        this.curso = curso
    }
}