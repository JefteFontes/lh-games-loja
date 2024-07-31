import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';
import { ListaProdutoComponent } from '../restrito/lista-produto/lista-produto.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.listarProdutos();
  }
  listarProdutos(){ 
    this._produtoService.getProdutos().subscribe(
      retornaProduto => {
        this.produtos = retornaProduto.map(
          item => {
            return new Produto(
              item.id,
              item.nome,
              item.descricao,
              item.foto,
              item.preco
            )
          }
        )
      }
    )
  }
}
