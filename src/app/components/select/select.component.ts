import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectOption } from '../../interfaces/interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options: SelectOption[] = [];
  @Output() onSelectedChange = new EventEmitter<SelectOption>();

  public selectedOption!: SelectOption;
  public isOpenOptions: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.selectedOption = this.options[0];
    this.onSelectedChange.emit(this.selectedOption);
  }

  selectOption(option: SelectOption): void {
    this.selectedOption = option;
    this.isOpenOptions = false;
    this.onSelectedChange.emit(this.selectedOption);
  }

  openCloseOptions(): void {
    this.isOpenOptions = !this.isOpenOptions
  }

}
