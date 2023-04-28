import { Component, Input } from '@angular/core';

interface Tarefa{
  nome:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'TODO-APP';

  tarefas: Tarefa[] = []

  tarefa: Tarefa = {

    nome: ""
  }

  cadastrarTarefa(){

    const tarefa: Tarefa = {
      nome: this.tarefa.nome
    }

    this.tarefas.push(tarefa)
    console.log(this.tarefas)
    

  }

  remover:boolean = false

  alterarRemover():void{
    this.remover = !this.remover
    console.log(this.remover)
  }

  indice2 = 0

  removerTarefa(indice):void{
    this.tarefas.splice(indice, 1)
  }
  categoria :string =''
  setCategoria(categoria){
    categoria = categoria
  }

}
