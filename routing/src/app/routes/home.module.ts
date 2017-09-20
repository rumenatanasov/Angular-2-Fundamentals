import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AppRoutesModule} from '../routes.module'
import {HomeComponent} from './home.component'
import {CarsService} from '../cars/cars.service'
import {PagerService} from '../cars/pager.service'
//import {CarDetailsComponent} from '../cardetails/car-details.component'
@NgModule({
    imports: [CommonModule, AppRoutesModule],
    declarations: [HomeComponent],
    providers: [CarsService, PagerService],
    exports: [HomeComponent]
})
export class HomeModule{}