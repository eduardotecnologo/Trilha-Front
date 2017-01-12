import {Component} from 'angular2/core';

@Component({
  selector: 'meu-app',
  template: `
    <h1>Lista de tarefas com Angular2</h1>
    <h2>Lista de tarefas</h2>
    <ul>
        <li *ngFor="#tarefa of tarefas; #i = index">
          {{tarefa}} <button (click)="remover(i)">Excluir</button>
        </li>
    </ul>
    <input type="text" name="tarefa" placeholder="Adicionar tarefas" [(ngModel)]="txtTarefa">
    <button (click)="adiconar()">Adicionar</button>
  `
})
export class AppComponent{
  public tarefas: string[] = [];

  public txtTarefa: string;

  adiconar() {
    if(this.txtTarefa != '') {
      this.tarefas.push(this.txtTarefa);
      this.txtTarefa = '';
    }
  }

  remover(index:number) {
    this.tarefas.splice(index, 1);
  }
}
