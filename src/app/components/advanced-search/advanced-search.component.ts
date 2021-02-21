import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/interfaces';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  public term: string = "";

  results: Product[] = [];

  constructor( private productsService: ProductsService ) {
  }

  ngOnInit(): void {
  }

  search(term: string): void {
    this.productsService.getProducts()
      .subscribe( products => {
        console.log(products)
        this.results = products;
      }, err => {
        console.error(err)
      } )
  }

}
