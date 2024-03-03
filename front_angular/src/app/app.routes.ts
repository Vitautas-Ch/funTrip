import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegionsComponent } from './regions/regions.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'regions',
        component: RegionsComponent,
        title: 'Regions page'
    }
];
