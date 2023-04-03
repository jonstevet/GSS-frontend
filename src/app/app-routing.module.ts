import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentstatusComponent } from './pages/rentstatus/rentstatus.component';
import { RentstatustableComponent } from './pages/rentstatustable/rentstatustable.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: RentstatusComponent },
  { path: 'renttable', component: RentstatustableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
