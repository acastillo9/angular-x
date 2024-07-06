import { Routes } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';
import { TimelineComponent } from './views/timeline/timeline.component';

export const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'timeline',
        component: TimelineComponent
    },
    {
        path: '',
        redirectTo: 'timeline',
        pathMatch: 'full'
    }
];
