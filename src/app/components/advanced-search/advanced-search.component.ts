import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from './../../interfaces/interfaces';
import { CategoriesService } from '../../services/categories.service';
import { SelectOption } from '../../interfaces/interfaces';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  public term: string = "";
  public results: Product[] = [];
  public selectOpts: SelectOption[] = [];
  public filteredBy!: SelectOption;

  constructor( private productsService: ProductsService,
               private categoriesService: CategoriesService ) {
      this.selectOpts = this.categoriesService.categoryOpts;
  }

  ngOnInit(): void {
  }



  search(): void {
    this.productsService.getProducts()
      .subscribe( products => {
        if (this.filteredBy.id === "1") {
          this.results = products.filter( (product: Product) => product.name.toLowerCase().includes(this.term.toLowerCase()) )
        } else {
          this.results = products.filter( (product: Product) => product.name.toLowerCase().includes(this.term.toLowerCase()) && product.categories[0].includes(this.filteredBy.name) )
        }
        // console.log(this.results)
      }, err => {
        console.error(err)
      } )
  }

  filterChange(option: SelectOption): void {
    // console.log(option.name, 'In advance Search Component')
    this.filteredBy = option
    this.search();
  }

  resetInput(): void {
    this.term = '';
  }

}
