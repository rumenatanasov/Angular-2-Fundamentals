import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { RegisterUser } from './register-user';
import {UsersActions} from '../store/users/users.actions'
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';
@Component({
    selector: 'register-user',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    user: RegisterUser = new RegisterUser();

    constructor(private userActions: UsersActions,
                private ngRedux: NgRedux<IAppState>,
                private router: Router){}

    register() {
        this.userActions.register(this.user)
        this.ngRedux.select(state => state.users.userRegistered)
        .subscribe(userRegistered => {
            if (userRegistered) {
                this.router.navigateByUrl('users/login')
            }
        })
        
    }
}