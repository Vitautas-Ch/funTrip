import { Injectable } from '@angular/core';
import { Region } from './region';

@Injectable({
  providedIn: 'root'
})
export class FunTripService {
  url = 'http://localhost:4200/region';
  constructor() { }

  async getRegions(): Promise<Region[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
}
