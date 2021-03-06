import { Component, OnInit } from '@angular/core'
import {StatsActions} from '../store/stats/stats.actions';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';
import {StatsModel} from './stats-model';
@Component({
    selector: 'stats',
    templateUrl: './stats.component.html'
})

export class StatsComponent implements OnInit {
    stats: StatsModel = new StatsModel()

    constructor(private statsActions: StatsActions,
                private ngRedux: NgRedux<IAppState>){}
    ngOnInit() {
        this.statsActions.get();
        this.ngRedux
        .select(state => state.stats)
        .subscribe(stats => this.stats = stats)
    }
}