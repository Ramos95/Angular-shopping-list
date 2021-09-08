import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Item from '../types/Item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  url: string = 'http://localhost:3000/items';
  httpOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    //return this.items;
    return this.http.get<Item[]>(this.url);
  }

  addItem(item: Item): Observable<Item> {
    //this.items.push(item);
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }

  toggleItem(item: Item): Observable<Item> {
    return this.http.put<Item>(this.url + item.id, item, this.httpOptions);
  }

  deleteItem(item: Item): Observable<Item> {
    return this.http.delete<Item>(this.url + item.id);
  }
}
