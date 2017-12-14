import {initialState} from './stats.state';
import {STATS_REQUESTED} from './stats.actions';

function requestStats(state, action) {
    const stats = action.stats
    return Object.assign({}, state, {
        users: stats.users,
        animals: stats.animals
    })
}
export function statsReducer(state = initialState, action) {
    switch(action.type) {
        case STATS_REQUESTED:
        return requestStats(state, action);
        default:
        return state
    }
    
}