import { IUsersState } from './users/users.state'
import {ICoreState} from './core/core.state'
import {IStatsState} from './stats/stats.state';
import {IAnimalState} from './animals/animals.state';

export interface IAppState {
    users: IUsersState,
    core: ICoreState,
    stats: IStatsState,
    animals: IAnimalState
}