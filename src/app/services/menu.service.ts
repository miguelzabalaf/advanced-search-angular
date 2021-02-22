import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _menuOpts: MenuItem[] = [
    {
      id: '1',
      slug: 'products',
      name: 'Products'
    },
    {
      id: '2',
      slug: 'on-sale',
      name: 'On Sale'
    },
    {
      id: '1',
      slug: 'log-in',
      name: 'Log In'
    },
  ]


  get menu(): MenuItem[] {
    return [...this._menuOpts];
  }

  constructor() { }
}
