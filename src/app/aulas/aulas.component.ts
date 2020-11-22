import { Component, Input, OnInit } from '@angular/core';
import { Aula } from 'src/app.model';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  aula_titulo =null;
  aula_tempo = null;

  @Input() cursos = null;


  salvar_aula(curso){
    const aula = new Aula(2, this.aula_titulo, this.aula_tempo)
    console.log(aula)
    curso.aula.push(aula)
    this.aula_tempo = null;
    this.aula_titulo = null;
  }
}
