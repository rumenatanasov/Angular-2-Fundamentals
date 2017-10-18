import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateRoute } from './core/private-route'

import { RegisterComponent } from './users/register.component'
import { LoginComponent } from './users/login.component';

import { StatsComponent } from './stats/stats.component';

import {AddCarComponent} from './cars/add-car.component';
import {ListCarsComponent} from './cars/list-cars.component';
import {CarDetailsComponent} from './cars/car-details.component';
import {ProfileComponent} from './users/profile-page.component';
const routes: Routes = [
    { path: 'users/register', component: RegisterComponent },
    { path: 'users/login', component: LoginComponent },
    {path: 'cars/create', component: AddCarComponent, canActivate: [PrivateRoute]},
    { path: '', component: StatsComponent },
    {path: 'cars/all', component: ListCarsComponent },
    {path: 'cars/details/:id', component: CarDetailsComponent},
    {path: 'users/profile', component: ProfileComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [],
    exports: [RouterModule],

})
export class CarRoutesModule { }