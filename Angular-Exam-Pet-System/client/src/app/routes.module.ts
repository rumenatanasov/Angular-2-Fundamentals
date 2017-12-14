import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateRoute } from './core/private-route'

import { RegisterComponent } from './users/register.component'
import { LoginComponent } from './users/login.component';

import { StatsComponent } from './stats/stats.component';
import {AddAnimalComponent} from './animals/add-animal.component';
import {ListAnimalsComponent} from './animals/list-animals.component';
import {AnimalDetails} from './animals/animal-details.component';
import {ProfileComponent} from './users/profile.component';

const routes: Routes = [
     { path: '', component: StatsComponent },
    { path: 'users/register', component: RegisterComponent },
    { path: 'users/login', component: LoginComponent },
    {path: 'animals/create', component: AddAnimalComponent, canActivate: [PrivateRoute]},
    {path: 'animals/all', component: ListAnimalsComponent},
    {path: 'animals/details/:id', component: AnimalDetails, canActivate: [PrivateRoute]},
    {path: 'users/profile', component: ProfileComponent, canActivate: [PrivateRoute]}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [],
    exports: [RouterModule]

})
export class AnimalRoutesModule { }