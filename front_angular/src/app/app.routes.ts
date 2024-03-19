import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegionsComponent } from './regions/regions.component';
import { BrestComponent } from './brest/brest.component';
import { GomelComponent } from './gomel/gomel.component';
import { GrodnoComponent } from './grodno/grodno.component';
import { MinskComponent } from './minsk/minsk.component';
import { MogilevComponent } from './mogilev/mogilev.component';
import { VitebskComponent } from './vitebsk/vitebsk.component';

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
    },
    {
        path: 'brest',
        component: BrestComponent,
        title: 'Брест'
    },
    {
        path: 'gomel',
        component: GomelComponent,
        title: 'Гомель'
    },
    {
        path: 'grodno',
        component: GrodnoComponent,
        title: 'Гродно'
    },
    {
        path: 'minsk',
        component: MinskComponent,
        title: 'Минск'
    },
    {
        path: 'mogilev',
        component: MogilevComponent,
        title: 'Могилев'
    },
    {
        path: 'vitebsk',
        component: VitebskComponent,
        title: 'Витебск'
    }


];
