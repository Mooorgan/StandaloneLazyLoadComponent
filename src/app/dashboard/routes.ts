import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TodayComponent } from './today/today.component';

export const DASHBOARD_ROUTES: Route[] = [
  {
    path: '',
    component: DashboardComponent,
  },
  //-------------------------------------This lazy loads today component too!!!--------------
  // {
  //   path: 'today',
  //   loadComponent: async () =>
  //     (await import('./today/today.component')).TodayComponent,
  // },
  //------------------------------------------------------------------------------------------
  {
    path: 'today',
    component: TodayComponent,
  },
];
