import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CarsComponent} from './cars/cars.component';
import {CarDetailsComponent} from './cars/car-details.component';
import {OwnerComponent} from './owners/owners.component';
import {OwnerDetailsComponent} from './owners/owner-details.component';
import {CarFormComponent} from './cars/car-form.component';
import {OwnerFormComponent} from './owners/owners-form.component';
import {EditCarComponent} from './cars/edit-car.component'
import {FormsModule} from '@angular/forms';
import {EditCommentComponent} from './comments/edit-comment.component';
import {EditOwnerComponent} from './owners/edit-owner.component';
import {TurboPipe} from './pipes/turo.pipe';
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cars/all', component: CarsComponent},
    {path: 'car/details/:id', component: CarDetailsComponent},
    {path: 'owners/all', component: OwnerComponent},
    {path: 'owners/details/:id', component: OwnerDetailsComponent},
    {path: 'cars/create', component: CarFormComponent},
    {path: 'owners/create', component: OwnerFormComponent},
    {path: 'cars/edit/:id', component: EditCarComponent},
    {path: 'comments/edit/:id', component: EditCommentComponent},
    {path: 'owners/edit/:id', component: EditOwnerComponent}
]
@NgModule({
    declarations: [
        CarsComponent, CarDetailsComponent, OwnerComponent, OwnerDetailsComponent, CarFormComponent,
        OwnerFormComponent, EditCarComponent, EditCommentComponent, EditOwnerComponent, TurboPipe
    ],
    imports: [
        RouterModule.forRoot(routes), CommonModule, FormsModule
    ],
    exports: [RouterModule]
})
export class AppRoutesModule { }