import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';



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
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
