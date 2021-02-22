import { Injectable } from '@angular/core';
import { SelectOption } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private _categoryOpts: SelectOption[] = [
    {
      id: "1",
      name: "All Categories",
      value:"all-categories"
    },
    {
      id: "2",
      name: "Phone",
      value:"phone"
    },
    {
      id: "3",
      name: "TV",
      value:"tv"
    },
    {
      id: "4",
      name: "Accessory",
      value:"accessory"
    },
    {
      id: "5",
      name: "Laptop",
      value:"laptop"
    },
  ]

  get categoryOpts(): SelectOption[] {
    return [...this._categoryOpts];
  }

  constructor() { }
}
