import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AddCarModel } from './add-car.model';
import {CarsActions} from '../store/cars/cars.actions';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';
@Component({
    selector: 'add-car',
    templateUrl: './add-car.component.html'
})

export class AddCarComponent {
    car: AddCarModel = new AddCarModel()

    constructor(private carActions: CarsActions,
                private router: Router,
                private ngRedux: NgRedux<IAppState>){}

    addCar() {
        this.carActions.addCar(this.car)
        let subscription = this.ngRedux
        .select(state => state.cars)
        .subscribe(cars => {
            if (cars.carAdded) {
                const carId = cars.carAddedId
                subscription.unsubscribe()
                this.router.navigateByUrl(`/cars/details/${carId}`)
                //this.router.navigateByUrl('/cars/all')
            }
        })
    }
}