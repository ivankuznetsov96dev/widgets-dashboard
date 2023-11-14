import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//*Routes props
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren:() => import('./dashboard/dashboard-page.module').then((m) => m.DashboardPageModule) },
  { path: '**', redirectTo: 'dashboard' }
]

/**
 * PagesRoutingModule
 *
 * @export
 * @class PagesRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
