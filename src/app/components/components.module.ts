import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    MenuComponent,
    AdvancedSearchComponent,
    HeaderComponent
  ],
  exports: [
    MenuComponent,
    AdvancedSearchComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
