import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { AnimalActions } from '../store/animals/animals.actions';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
    animals: Array<object> = []

    constructor(private animalActions: AnimalActions,
        private ngRedux: NgRedux<IAppState>) { }

    ngOnInit() {
        this.animalActions.mine();
        this.ngRedux
        .select(state => state.animals.myAnimals)
        .subscribe(animals => this.animals = animals)
    }
    delete(id) {
        this.animalActions.delete(id)
    }
}