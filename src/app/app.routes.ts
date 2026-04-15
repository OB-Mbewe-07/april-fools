import { Routes } from '@angular/router';
import { BevarageCardComponent } from './cards.component/cards.component';
import { MotivationComponent } from './motivation.component/motivation.component';

export const routes: Routes = [
    {
        path: '',
        component: BevarageCardComponent
    },
    {
        path: 'motivation/:id',
        component: MotivationComponent
    }
];
