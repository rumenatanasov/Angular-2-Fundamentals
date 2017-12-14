import {combineReducers} from 'redux';
import {IAppState} from './app.state';
import {usersReducer} from './users/users.reducer';
import {coreReducer} from './core/core.reducer';
import {statsReducer} from './stats/stats.reducer';
import {animalsReducer} from './animals/animals.reducer';
export const reducer = combineReducers<IAppState>({
    users: usersReducer,
    core: coreReducer,
    stats: statsReducer,
    animals: animalsReducer
})