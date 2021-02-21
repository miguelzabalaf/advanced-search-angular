import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  get menuOptions(): MenuItem[] {
    return this.menuService.menu;
  }

  constructor( private menuService: MenuService ) { }

  ngOnInit(): void {
  }

}
