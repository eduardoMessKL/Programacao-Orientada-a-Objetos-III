import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome!: string;
  telefone!: number;
   lista_contatos: any[] = [
    {"nome": "Eduardo Messias", "telefone": 999201475},
    {"nome": "João Victor Peterlini", "telefone": 999876545},
    {"nome": "Pedro Lorenzetti", "telefone": 999876543},
    {"nome": this.nome, "telefone": this.telefone}];

  constructor() {

  }

  cadastrar(){
    console.log(this.nome + " " + this.telefone);
    this.lista_contatos.push({"nome": this.nome, "telefone": this.telefone})
  }

}