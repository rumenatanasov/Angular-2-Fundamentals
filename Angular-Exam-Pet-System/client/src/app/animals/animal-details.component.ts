import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalActions } from '../store/animals/animals.actions';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { AnimalReviewModel } from './animal-review.model';

@Component({
    selector: 'animal-details',
    templateUrl: './animal-details.component.html'
})

export class AnimalDetails {
    id: number;
    animal: object = {};
    review: AnimalReviewModel = new AnimalReviewModel()
    reviews: Array<object>
    constructor(private route: ActivatedRoute,
        private animalActions: AnimalActions,
        private ngRedux: NgRedux<IAppState>) { }
    ngOnInit() {
        this.route.params
            .subscribe(params => {
                const id = params['id']
                this.animalActions.animalDetails(id)
                this.animalActions.allReviews(id)
                this.ngRedux
                    .select(state => state.animals)
                    .subscribe(animals => {
                        this.animal = animals.animalDetails
                        this.reviews = animals.animalReviews
                    })
            })
    }
    react() {
        this.animalActions.reaction(this.animal['id']);
    }
    submitReview() {

        this.animalActions.submitReview(this.animal['id'], this.review);

    }
}