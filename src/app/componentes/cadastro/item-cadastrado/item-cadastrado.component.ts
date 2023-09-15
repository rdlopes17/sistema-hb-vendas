import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-cadastrado',
  templateUrl: './item-cadastrado.component.html',
  styleUrls: ['./item-cadastrado.component.css']
})
export class ItemCadastradoComponent implements OnInit {

 @Input() cadastro = {
    nome: 'nome do forncedor',
    categoria: 'cadastro do fornecedor',
    email: 'fornecedor@contato.com',
    telefone:'99999999999999'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraItemCadastrado(): string {
    if(this.cadastro.nome.length >= 100) {
      return 'cadastro-g'
    }
    return 'cadastro-p'

  }

}
