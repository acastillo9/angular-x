import { Routes } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';
import { TimelineComponent } from './views/timeline/timeline.component';
import { LoginComponent } from './views/login/login.component';
import { CanActivateUser } from './shared/auth.guard';

export const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'timeline',
        component: TimelineComponent,
        canActivate: [CanActivateUser]
    },
    {
        path: '',
        redirectTo: 'timeline',
        pathMatch: 'full'
    }
];
