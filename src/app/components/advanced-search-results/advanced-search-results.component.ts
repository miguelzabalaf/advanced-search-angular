import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-advanced-search-results',
  templateUrl: './advanced-search-results.component.html',
  styleUrls: ['./advanced-search-results.component.scss']
})
export class AdvancedSearchResultsComponent implements OnInit {

  @Input() results: Product[] = [];
  @Input() term: string = '';
  @Input() categoryFiltered: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
