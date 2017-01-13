import {Component} from 'angular2/core';
import {Cliente} from './cliente';

@Component({
  selector: 'meu-app',
  template: `
    <h1>Cadastro de Clientes com Angular2</h1>
    <h2>{{textListagem}}</h2>
    <p>Clientes selecionado: {{cliente.nome}}</p>
    <ul>
      <li *ngFor="#cli of clientes, #i = index">
          <button (click)="selecionar(i)">
              {{cli.id}} - {{cli.nome}}
              </button>
      </li>
    </ul>
    `
})
export class AppComponent{
  private textListagem: string;
  private clientes: Cliente[];
  private cliente: Cliente;

  constructor(){
    this.textListagem = 'Listagem de clientes';
    this.clientes = [
      new Cliente(1, 'Eduardo'),
      new Cliente(2, 'Alexandre')
    ];
  this.cliente = this.clientes[0];
  }
  selecionar(index: number): void{
    if(index < this.clientes.length){
    this.cliente = this.clientes[index];
  }
  }
}
