import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { Profiles2Component } from './pages/profiles2/profiles2.component';

export const routes: Routes = [
    {
        component: ProfileComponent,
        path:'profile'
    },
    {
        path:'profiles2',
        component: Profiles2Component
    }
];

