import {ROUTE_CHANGE} from '../store/core/core.actions';
import {USER_LOGGED} from '../store/users/users.actions';
import {Router, NavigationStart} from '@angular/router';
export function config(ngRedux, router, authService) {
    router.events.subscribe(ev => {
        if (ev instanceof NavigationStart) {
            ngRedux.dispatch({
                type: ROUTE_CHANGE
            })
        }
    })
    if (authService.isUserAuthenticated()) {
        const token = authService.getToken()
        const username = authService.getUser()

        ngRedux.dispatch({
            type: USER_LOGGED,
            result: {
                success: true,
                token,
                user: {
                    name: username
                }
            }
        })
    }
}
