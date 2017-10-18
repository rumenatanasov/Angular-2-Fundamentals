import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '..';
import {CarsService} from '../../cars/cars.service';

export const ADD_CAR = 'car/ADD'
export const GET_CARS = 'cars/GET'
export const CAR_DETAILS = 'car/DETAILS'
export const CAR_LIKE = 'car/LIKE'
export const CAR_ADD_REVIEW = 'car/REVIEW'
export const CAR_REVIEWS = 'car/REVIEWS'
export const DELETE_CAR = 'car/DELETE'
export const MINE_CARS = 'cars/MINE'
 
@Injectable()
export class CarsActions {

    constructor(private carsService: CarsService, 
                private ngRedux: NgRedux<IAppState>){}
    addCar(car) {
        this.carsService.addCar(car)
        .subscribe(result => {
            this.ngRedux.dispatch({
                type: ADD_CAR,
                result
            })
        })
    }
    allCars(page = 1, search = null) {
        this.carsService.allCars(page, search)
        .subscribe(cars => {
            this.ngRedux.dispatch({
                type: GET_CARS,
                cars
            })
        })
    }
    carDetails(id) {
        this.carsService.carDetails(id)
        .subscribe(car => {
            this.ngRedux.dispatch({
                type: CAR_DETAILS,
                car
            })
        })
    }
    like(id) {
        this.carsService.like(id)
        .subscribe(result => {
            this.ngRedux.dispatch({
                type: CAR_LIKE,
                result
            })
        })
    }
    submitReview(id, review) {
        this.carsService
        .submitReview(id, review)
        .subscribe(result => {
          this.ngRedux.dispatch({
              type: CAR_ADD_REVIEW,
              result
          })
        })
    }
    allReviews(id) {
        this.carsService.allReviews(id)
        .subscribe(reviews => {
            this.ngRedux.dispatch({
                type: CAR_REVIEWS,
                reviews
            })
        })
    }
    delete(id) {
        this.carsService.delete(id)
        .subscribe(result => {
            this.ngRedux.dispatch({
                type: DELETE_CAR,
                result, id
            })
        })
    }
    mine() {
        this.carsService.mine()
        .subscribe(cars => {
            this.ngRedux.dispatch({
                type: MINE_CARS,
                 cars
            })
        })
    }
}