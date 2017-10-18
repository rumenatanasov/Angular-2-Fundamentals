import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms';
import {AddCarComponent} from './add-car.component';
import {CarsActions} from '../store/cars/cars.actions'
import {CarsService} from './cars.service';
import {ListCarsComponent} from './list-cars.component';
import {CarDetailsComponent} from './car-details.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [AddCarComponent, ListCarsComponent, CarDetailsComponent],
    providers: [CarsActions, CarsService]
})

export class CarsModule{

}