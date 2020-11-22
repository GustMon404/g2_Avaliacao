import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CursoService } from './curso.service';
import { AulasComponent } from './aulas/aulas.component';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarCursoComponent,
    AulasComponent,
    DetalheCursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
