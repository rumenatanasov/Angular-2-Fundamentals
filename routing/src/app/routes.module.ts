import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './routes/home.component'
import {CarsComponent} from './cars/cars.component'
import {CarDetailsComponent} from './cardetails/car-details.component'
import {OwnerComponent} from './owners/owners.component'
import {OwnersDetailsComponent} from './owners/owners-details.component'

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cars/all', component: CarsComponent},
    {path: 'car/details/:id', component: CarsComponent},
    {path: 'owners/all', component: OwnerComponent},
    {path: 'owners/details/:id', component: OwnersDetailsComponent}
]
@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule {}