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
    aula: Array<Aula>

    constructor(id: number,categoria: Categoria, titulo: string,descricao: string, professor: Array<Professor>, aula?: Array<Aula>){
        this.id= id;
        this.categoria = categoria;
        this.titulo = titulo;
        this.descricao = descricao;
        this.professor = professor;
        this.aula = aula;
    }
}

export class Aula{
    id: number;
    titulo: string;
    tempo: string;
    exercicio: Exercicio;

    constructor(id: number, titulo: string, tempo: string, exercicio?: Exercicio){
        this.id = id;
        this.titulo = titulo;
        this.tempo = tempo;
        this.exercicio = exercicio;
    }
}

export class Exercicio{
    id: number;
    exercicio: string;

    constructor(id:number, exercicio:string){
        this.id = id;
        this.exercicio = exercicio;
    }
}