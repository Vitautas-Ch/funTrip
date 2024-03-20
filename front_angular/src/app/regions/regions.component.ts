import { Component, inject } from '@angular/core';
import { FunTripService } from '../fun-trip.service';
import { Region } from '../region';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-regions',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './regions.component.html',
  styleUrl: './regions.component.css'
})
export class RegionsComponent {
  funTripService: FunTripService = inject(FunTripService);
  regions: Region[] = [];

  constructor() {
    // this.funTripService.getRegions().then((response: Region[]) => {
    //   this.regions = response;
    // });
  }
}
