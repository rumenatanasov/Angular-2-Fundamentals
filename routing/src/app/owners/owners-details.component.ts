import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { OwnersService } from './owners.service'
import { Owners } from './owners'
import { Cars } from '../cars/car'
import { CarsService } from '../cars/cars.service'
import 'rxjs/add/operator/switchMap'

@Component({
    selector: 'owner-details',
    templateUrl: './owners-details.component.html'
})

export class OwnersDetailsComponent implements OnInit {
    owner: Owners
    car: Cars
    constructor(private ownersService: OwnersService,
        private carsService: CarsService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.switchMap((params: Params) => this.ownersService.getOwner(+params['id']))
            .subscribe(owner => this.owner = owner)

            this.route.params.switchMap((params: Params) => this.carsService.getCar(+params['id']))
            .subscribe(car => this.car = car)
    }
}