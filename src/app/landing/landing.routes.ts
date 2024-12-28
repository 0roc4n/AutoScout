import { Routes } from '@angular/router';
import { LandingPage } from './landing.page';

export const routes: Routes = [
    {
        path: 'landing',
        component: LandingPage,
    },
    {
        path: '',
        redirectTo: '/landing',
        pathMatch: 'full',
    },
];