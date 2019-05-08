import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SportsListComponent } from './sports/sports-list/sports-list.component';
import { SportDetailComponent } from './sports/sport-detail/sport-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sports', component: SportsListComponent},
  {path: 'sport/:name', component: SportDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
