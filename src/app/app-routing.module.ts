import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateRestaurantComponent } from './components/add-update-restaurant/add-update-restaurant.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/add-restaurant', pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantListComponent},
  { path: 'add-restaurant', component: AddUpdateRestaurantComponent },
  { path: 'edit-restaurant/:id', component: AddUpdateRestaurantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
