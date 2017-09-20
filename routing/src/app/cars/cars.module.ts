import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AppRoutesModule} from '../routes.module'
import {CarsComponent} from './cars.component'
import {CarsService} from './cars.service'
import {HttpModule} from '@angular/http'

//import {CarDetailsComponent} from '../cardetails/car-details.component'
import {CarDetailsModule} from '../cardetails/car-details.module'
import {OwnersModule} from '../owners/owners.module'


@NgModule({
    imports: [CommonModule, CarDetailsModule, AppRoutesModule, OwnersModule, HttpModule],
    declarations: [CarsComponent],
    providers: [CarsService],
    exports: [CarsComponent]
})
export class CarsModule{}