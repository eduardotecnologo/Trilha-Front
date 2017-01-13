import {Component} from 'angular2/core';

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
  private clientes: Object [] = [
    {'id':'1',
    'nome':'Eduardo'
  },
    {'id':'2',
    'nome':'Alexandre'
  },
  {'id':'3',
   'nome':'Lucio'
 }
  ];
  private cliente: Object = this.clientes[0];
}
