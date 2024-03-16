import { Injectable } from '@angular/core';
import { Region } from './region';

@Injectable({
  providedIn: 'root'
})
export class FunTripService {
  host = 'http://localhost:4200';

  regionUrl = '/api/Region/region';
  
  constructor() { }

  async getRegions(): Promise<Region[]> {
    const url = this.host + this.regionUrl;
    const data = await fetch(url);
    return await data.json() ?? [];
  }
}
