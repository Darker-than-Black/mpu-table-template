import { Injectable } from '@angular/core';

import { Item } from '../types';

interface StoreData {
  list: Item[]
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private data: StoreData = {
    list: [],
  };

  get list(): Item[] {
    return this.data.list;
  }

  setList(data: Item[]): void {
    this.data.list = data;
  }
}
