import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { Profiles2Component } from './pages/profiles2/profiles2.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    {
        component: ProfileComponent,
        path:''
    },
    {
        path:'profiles2',
        component: Profiles2Component
    },
    {
        path:'projects',
        component: ProjectsComponent
    }
];

