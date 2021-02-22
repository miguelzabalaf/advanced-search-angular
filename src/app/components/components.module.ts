import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AdvancedSearchResultsComponent } from './advanced-search-results/advanced-search-results.component';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [
    MenuComponent,
    AdvancedSearchComponent,
    HeaderComponent,
    AdvancedSearchResultsComponent,
    SelectComponent
  ],
  exports: [
    MenuComponent,
    AdvancedSearchComponent,
    HeaderComponent,
    AdvancedSearchResultsComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
