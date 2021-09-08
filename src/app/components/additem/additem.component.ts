import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import item from 'src/app/types/Item';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css'],
})
export class AdditemComponent implements OnInit {
  id: number = 0;
  name: string = '';
  price: number = 0;
  quantity: number = 0;

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const item: item = {
      id: this.id,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      completed: false,
    };

    this.itemService.addItem(item).subscribe((i) => {
      this.router.navigate(['/']);
    });
  }
}
