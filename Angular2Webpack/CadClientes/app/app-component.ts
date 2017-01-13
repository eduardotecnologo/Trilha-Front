import {Component} from 'angular2/core';
import {Cliente} from './cliente';

@Component({
  selector: 'meu-app',
  template: `
    <h1>Cadastro de Clientes com Angular2</h1>
    <h2>{{textListagem}}</h2>
    <p>Clientes selecionado: {{cliente.nome}}</p>
    <ul>
      <li *ngFor="#cli of clientes">
          {{cli.id}} - {{cli.nome}}
      </li>
    </ul>
    `
})
export class AppComponent{
  private textListagem: string = 'Listagem de Clientes';
  private clientes: Cliente [] = [
    new Cliente(1, 'Eduardo'),
    new Cliente(2, 'Alexandre'),
    new Cliente(3, 'Silva')
  ];
  private cliente: Cliente = this.clientes[0];
}
