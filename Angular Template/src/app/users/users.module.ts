import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './register.component';
import {UsersService} from './users.service';
import {UsersActions} from '../store/users/users.actions';
import {LoginComponent} from './login.component';


@NgModule({
imports: [FormsModule, CommonModule],
declarations: [RegisterComponent, LoginComponent],
providers: [UsersService, UsersActions],
exports: [RegisterComponent, LoginComponent]
})

export class UsersModule {

}