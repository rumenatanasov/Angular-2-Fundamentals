import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateRoute } from './core/private-route'

import { RegisterComponent } from './users/register.component'
import { LoginComponent } from './users/login.component';

import { StatsComponent } from './stats/stats.component';


const routes: Routes = [
    { path: 'users/register', component: RegisterComponent },
    { path: 'users/login', component: LoginComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [],
    exports: [RouterModule],

})
export class CarRoutesModule { }