import { Component, Input } from '@angular/core';
import { Vegetable } from '../vegetables.model';
import { CarrelloComponent } from '../carrello/carrello.component';
import { CartProduct } from '../CartProduct.model';

@Component({
  selector: 'app-vegetable-list',
  standalone: true,
  imports: [CarrelloComponent],
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  @Input() vegetables!: Vegetable[]
  carrello:CartProduct[] = []
  added!: Vegetable


  addToCart(verdura: Vegetable, nProdotti: HTMLInputElement){
    console.log(verdura.nome + " " + verdura.descrizione + " " + verdura.prezzo + " " + nProdotti.value)
    this.carrello.push(new CartProduct(verdura.nome, verdura.descrizione, verdura.prezzo, Number(nProdotti.value)))
    console.log(this.carrello)
    this.added = verdura
  }
}
