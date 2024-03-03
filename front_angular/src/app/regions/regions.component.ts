import { Component, inject } from '@angular/core';
import { FunTripService } from '../fun-trip.service';
import { Region } from '../region';

@Component({
  selector: 'app-regions',
  standalone: true,
  imports: [],
  templateUrl: './regions.component.html',
  styleUrl: './regions.component.css'
})
export class RegionsComponent {
  funTripService: FunTripService = inject(FunTripService);
  regions: Region[] = [];

  constructor() {
    this.funTripService.getRegions().then((response: Region[]) => {
      this.regions = response;
    });
  }
}
