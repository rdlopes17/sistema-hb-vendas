import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-cadastro',
  templateUrl: './criar-cadastro.component.html',
  styleUrls: ['./criar-cadastro.component.css']
})
export class CriarCadastroComponent implements OnInit {

  cadastro = {
    nome: 'nome do forncedor',
    categoria: 'cadastro do fornecedor',
    email: 'fornecedor@contato.com',
    telefone:'99999999999999'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarCadastro() {
    alert('tesde de botao')
  }

  cancelar() {
    alert('teste de cancelar')
  }

}
