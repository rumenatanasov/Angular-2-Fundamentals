import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddAnimalModel } from './add-animal.model';
import { AnimalActions } from '../store/animals/animals.actions';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
@Component({
    selector: 'add-animal',
    templateUrl: './add-animal.component.html'
})

export class AddAnimalComponent {
    animal: AddAnimalModel = new AddAnimalModel()

    constructor(private animalActions: AnimalActions,
        private router: Router,
        private ngRedux: NgRedux<IAppState>) { }

    addAnimal() {
        this.animalActions.addAnimal(this.animal)
        let subscription = this.ngRedux
        .select(state => state.animals)
        .subscribe(animals => {
            if (animals.animalAdded) {
                subscription.unsubscribe()
                this.router.navigateByUrl('/animals/all')
            }
        })
    }
}