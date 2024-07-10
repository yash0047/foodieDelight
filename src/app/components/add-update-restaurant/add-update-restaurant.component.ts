import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-add-update-restaurant',
  templateUrl: './add-update-restaurant.component.html',
  styleUrls: ['./add-update-restaurant.component.scss']
})
export class AddUpdateRestaurantComponent {
  restaurantForm: FormGroup;
  restaurantId: number | undefined;
  submitted:boolean= false;
  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      contactInfo: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.params['id'];
    if (this.restaurantId) {
      this.restaurantService.getRestaurantById(this.restaurantId).subscribe(data => {
        this.restaurantForm.patchValue(data); // Patch form with data from API response
      });
    }
  }
  get f() {
    return this.restaurantForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.restaurantForm.valid) {
      const restaurant = this.restaurantForm.value;
      if (this.restaurantId) {
        restaurant.id = this.restaurantId;
        this.restaurantService.updateRestaurant(restaurant).subscribe((res) => {
          if (res) {
            this.router.navigate(['/restaurants']);
            setTimeout(() => {
              this.toastr.success('Restaurant Updated Successfully','Success');
            }, 500);
          }
        },
        ((err) => {
          this.toastr.error('Something Went Wrong, Try After sometime','Error');
        }));
      } else {
        this.restaurantService.addRestaurant(restaurant).subscribe((res) => {
          if (res) {
            this.router.navigate(['/restaurants']);
            setTimeout(() => {
              this.toastr.success('Restaurant Added Successfully','Success');
            }, 500);
          }
        },((err) => {
          this.toastr.error('Something Went Wrong, Try After sometime','Error');
        }));
      }
    }
  }
}
