import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CurriculosComponent } from './components/curriculos/curriculos.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { EscolaridadeComponent } from './components/escolaridade/escolaridade.component';
import { ResumoComponent } from './components/resumo/resumo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    SobreComponent,
    CurriculosComponent,
    HabilidadesComponent,
    CursosComponent,
    ObjetivosComponent,
    EscolaridadeComponent,
    ResumoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
