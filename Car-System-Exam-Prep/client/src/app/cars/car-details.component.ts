import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsActions } from '../store/cars/cars.actions';
import { CarReviewModel } from './car-review.model';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store'
@Component({
    selector: 'car-details',
    templateUrl: './car-details.component.html'
})

export class CarDetailsComponent implements OnInit {
    id: number
    car: object = {}
    review: CarReviewModel = new CarReviewModel()
    reviews: Array<object> = []
    constructor(private route: ActivatedRoute,
        private carsActions: CarsActions,
        private ngRedux: NgRedux<IAppState>) { }
    ngOnInit() {
        this.route.params
            .subscribe(params => {
                const id = params['id']
                this.carsActions.carDetails(id)
                this.carsActions.allReviews(id);
                this.ngRedux
                    .select(state => state.cars)
                    .subscribe(cars => {
                        this.car = cars.carDetails
                        this.reviews = cars.carReviews
                    })
            })
    }
    like() {
        this.carsActions.like(this.car['id'])
    }
    submitReview() {
        this.carsActions.submitReview(this.car['id'], this.review)
    }
    
}