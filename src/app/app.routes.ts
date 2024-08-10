import { Routes } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';
import { TimelineComponent } from './views/timeline/timeline.component';
import { LoginComponent } from './views/login/login.component';
import { CanActivateUser } from './shared/auth.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { TweetDetailsComponent } from './views/tweet-details/tweet-details.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [CanActivateUser],
    children: [
      {
        path: 'home',
        component: TimelineComponent,
      },
      {
        path: 'tweets/:id',
        component: TweetDetailsComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
