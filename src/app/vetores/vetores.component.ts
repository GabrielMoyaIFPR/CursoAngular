import { Component } from '@angular/core';
import { Cliente } from '../entidades/cliente';
import { ServicoCliente } from '../servicos/servico.Cliente';

@Component({
  selector: 'vetor-component'
  ,templateUrl: 'vetores.component.html'
  ,styleUrls: ['vetores.component.html']
})
export class VetoresComponent{

  constructor(private servico: ServicoCliente){
  }

  adicionar() : void {
    this.servico.adicionar();
  }

  excluir(i:number) : void {
    this.servico.excluir(i);
  }

  alterar(i:number) : void{
    this.servico.alterar(i);
  }
}
