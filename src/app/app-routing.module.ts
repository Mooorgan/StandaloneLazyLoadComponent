import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Route[] = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'about',
    // component: AboutComponent,
    loadComponent: async () =>
      (await import('./about/about.component')).AboutComponent,
  },
  {
    path: 'dashboard',
    //---------------Works when importing RoutingModule too CRAZY!!!------------------------
    // loadChildren: () =>
    //   import('./dashboard/dashboard-routing.module').then(
    //     (mod) => mod.DashboardRoutingModule
    //   ),
    //---------------Importing Module--------------------------------------------------------
    // loadChildren: () =>
    //   import('./dashboard/dashboard.module').then((mod) => mod.DashboardModule),
    //-------------------Dashboard Routes Constant---------------------------------------------
    loadChildren: () =>
      import('./dashboard/routes').then((mod) => mod.DASHBOARD_ROUTES),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
