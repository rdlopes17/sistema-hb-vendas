import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cadastro',
  templateUrl: './listar-cadastro.component.html',
  styleUrls: ['./listar-cadastro.component.css']
})
export class ListarCadastroComponent implements OnInit {

  listaCadastro = [
    {
      nome: 'nome do forncedor 1',
      categoria: 'cadastro do fornecedor 2',
      email: 'fornecedor2@contato.com',
      telefone:'77777777777777'
    },
    {
      nome: 'nome do forncedor 2',
      categoria: 'cadastro do fornecedor 2',
      email: 'fornecedor2@contato.com',
      telefone:'77777777777777'
    },
    {
      nome: 'raul lopes de oliveira silveira do nascimento',
      categoria: 'cadastro do fornecedor 3',
      email: 'fornecedor2@contato.com',
      telefone:'77777777777777'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
