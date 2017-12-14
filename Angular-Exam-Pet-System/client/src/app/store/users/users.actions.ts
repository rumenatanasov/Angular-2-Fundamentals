import {Injectable} from '@angular/core';
import {UsersService} from '../../users/users.service';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '..'
export const USER_REGISTERED = 'users/REGISTER';
export const USER_LOGGED = 'user/LOGGED';
export const LOGOUT = 'user/LOGOUT';
export const USER_PROFILE = 'users/PROFILE'
@Injectable()

export class UsersActions {
    constructor(private usersService: UsersService,
                private ngRedux: NgRedux<IAppState>){}
    register(user) {
        this.usersService.register(user)
        .subscribe(result => {
            this.ngRedux.dispatch({
                type: USER_REGISTERED,
                result
            })

        })
    }
    login(user) {
        this.usersService.login(user)
        .subscribe(result => {
            this.ngRedux.dispatch({
                type: USER_LOGGED,
                result
            })
        })
    }
    logout() {
        this.ngRedux.dispatch({
            type: LOGOUT
        })
    }
}