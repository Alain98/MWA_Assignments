import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private farms: object[] = [
    { _id: 1, Farm: 'Natural Prairie', produce: ['lettuce', 'tomato'] },
    { _id: 2, Farm: 'fresh Prairie', produce: ['banana', 'apple'] },
    { _id: 3, Farm: 'vegetables Prairie', produce: ['mango', 'guava'] },
    { _id: 4, Farm: 'fruits Prairie', produce: ['orange', 'pineapple'] }
  ];
  constructor() { }

  getData() {
    return this.farms;
  }

  getDataFromId(farmId): object {
    for (let farm of this.farms) {
      if (farm['_id'] == farmId) return farm;
    }
    return null;
  }
}
