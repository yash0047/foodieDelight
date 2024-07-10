import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Restaurant } from 'src/app/interfaces/restaurant.interface';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent {
  restaurants!: Restaurant[];

  constructor(private restaurantService: RestaurantService, private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(data => {
      this.restaurants = data;
    });
  }

  deleteRestaurant(id: string): void {
    this.restaurantService.deleteRestaurant(id).subscribe((res) => {
      if (res) {
        this.loadRestaurants();
        setTimeout(() => {
          this.toastr.success('Restaurant Deleted Successfully', 'Success');
        }, 500);
      }
    },
      ((err) => {
        this.toastr.error('Something Went Wrong, Try After sometime', 'Error');
      }));
  }


}
