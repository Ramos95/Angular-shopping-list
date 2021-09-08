import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Item from '../../types/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item: Item = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0,
    completed: false,
  };

  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(item: Item) {
    this.deleteItem.emit(item);
  }

  onToggle(item: Item) {
    item.completed = !item.completed;
    this.toggleItem.emit(item);
  }
}
