import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TodayComponent } from './today/today.component';

@NgModule({
  declarations: [DashboardComponent, TodayComponent],
  imports: [DashboardRoutingModule],
})
export class DashboardModule {}
