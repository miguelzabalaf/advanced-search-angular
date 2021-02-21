import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AdvancedSearchResultsComponent } from './advanced-search-results/advanced-search-results.component';



@NgModule({
  declarations: [
    MenuComponent,
    AdvancedSearchComponent,
    HeaderComponent,
    AdvancedSearchResultsComponent
  ],
  exports: [
    MenuComponent,
    AdvancedSearchComponent,
    HeaderComponent,
    AdvancedSearchResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
