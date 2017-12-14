import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '..';
import { AnimalsService } from '../../animals/animals.service';

export const ADD_ANIMAL = 'animal/ADD';
export const ALL_ANIMALS = 'animals/ALL';
export const ANIMAL_DETAILS = 'animal/DETAILS';
export const MY_ANIMALS = 'animals/MINE';
export const CREATE_COMMENT = 'comment/CREATE';
export const ANIMAL_REVIEWS = 'car/REVIEWS';
export const DELETE_ANIMAL = 'animal/DELETE';
export const CREATE_REVIEW = 'create/REVIEW';
export const ANIMAL_REACTION = 'reaction/ADD';
@Injectable()
export class AnimalActions {

    constructor(private animalService: AnimalsService,
        private ngRedux: NgRedux<IAppState>) { }

        addAnimal(animal) {
            this.animalService.addAnimal(animal)
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: ADD_ANIMAL, 
                    result
                })
            })
        }
        allAnimals(page = 1, search = null) {
            this.animalService.allAnimals(page, search)
            .subscribe(animals => {
                this.ngRedux.dispatch({
                    type: ALL_ANIMALS,
                    animals
                })
            })
        }
        animalDetails(id) {
            this.animalService.animalDetails(id)
            .subscribe(animal => {
                this.ngRedux.dispatch({
                    type: ANIMAL_DETAILS,
                    animal
                })
            })
        }
        mine() {
            this.animalService.mine()
            .subscribe(animals => {
                this.ngRedux.dispatch({
                    type: MY_ANIMALS,
                    animals
                })
            })
        }
     
       
        delete(id) {
            this.animalService.delete(id)
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: DELETE_ANIMAL,
                    result, id
                })
            })
        }
        submitReview(id, review) {
        this.animalService
        .submitReview(id, review)
        .subscribe(result => {
          this.ngRedux.dispatch({
              type: CREATE_REVIEW,
              result
          })
        })
    }
    allReviews(id) {
        this.animalService.allReviews(id)
        .subscribe(reviews => {
            this.ngRedux.dispatch({
                type: ANIMAL_REVIEWS,
                reviews
            })
        })
    }
    reaction(id) {
        this.animalService.reaction(id)
        .subscribe(result => {
            this.ngRedux.dispatch({
                type: ANIMAL_REACTION,
                result
            })
        })
    }
    
}