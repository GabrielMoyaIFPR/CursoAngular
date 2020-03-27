import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { Erro404Component } from './erro404/erro404.component';
import { FormsModule } from '@angular/forms';
import { VetoresComponent } from './vetores/vetores.component';
import { ServicoEstado } from './servicos/servico.estado';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, RodapeComponent, Erro404Component, VetoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicoEstado],
  bootstrap: [AppComponent]
})
export class AppModule { }
