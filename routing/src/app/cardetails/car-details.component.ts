import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { CarsService } from '../cars/cars.service'
import { OwnersService } from '../owners/owners.service'
import { Cars } from '../cars/car'
import { Owners } from '../owners/owners'
import { CARS } from '../cars/mock-cars'
import 'rxjs/add/operator/switchMap'
@Component({
    selector: 'car-details',
    templateUrl: './car-details.component.html',
    //providers: [CarsService]
})
export class CarDetailsComponent implements OnInit {
    car: Cars
    owner: Owners
    constructor(private carService: CarsService,
        private ownerService: OwnersService,
        private route: ActivatedRoute) { }
    

    ngOnInit(): void {
        this.route.params.switchMap((params: Params) => this.carService.getCar(+params['id']))
            .subscribe(car => {
                this.car = car;
                
            })

        this.route.params.switchMap((params: Params) => this.ownerService.getOwner(+params['id']))
            .subscribe(owner => this.owner = owner)
    }
}