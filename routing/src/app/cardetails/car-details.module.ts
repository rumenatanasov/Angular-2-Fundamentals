import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {CarDetailsComponent} from './car-details.component'
import {CarsService} from '../cars/cars.service'

@NgModule({
    imports: [CommonModule],
    declarations: [CarDetailsComponent],
    providers: [CarsService],
    exports: [CarDetailsComponent]
})
export class CarDetailsModule{}