import {initialState} from './animals.state';
import {ADD_ANIMAL, ALL_ANIMALS, ANIMAL_DETAILS, MY_ANIMALS, DELETE_ANIMAL, CREATE_REVIEW,
    ANIMAL_REACTION, ANIMAL_REVIEWS} from './animals.actions';

function addAnimal(state, action) {
    const result = action.result;
    return Object.assign({}, state, {
        animalAdded: result.success
    })
}
function allAnimals(state, action) {
    return Object.assign({}, state, {
        allAnimals: action.animals
    })
}
function animalDetails(state, action) {
    return Object.assign({}, state, {
        animalDetails: action.animal
    })
}
function mineAnimals(state, action) {
    return Object.assign({}, state, {
        myAnimals: action.animals
    })
}

function deleteAnimal(state, action) {
    const result  = action.result
    if (result.success) {
        const id = action.id
        const animalIndex = state.myAnimals.findIndex(a => a.id === id)

        if (animalIndex >= 0) {
            const myAnimals = state.myAnimals.slice(0)
            myAnimals.splice(animalIndex, 1)
            return Object.assign({}, state, {
                myAnimals
            })
        }
    }
    return state
}
function animalReaction(state, action) {
    if (action.result.success) {
        const currentAnimalReactions = state.animalDetails.reactions
        const animalDetails = Object.assign({}, state.animalDetails, {
            reactions: currentAnimalReactions
        })
        return Object.assign({}, state, {
            animalDetails
        })
    }
    return state

}
function submitReview(state, action) {
    const result = action.result;
    if (result.success) {
        const review = result.review
        const animalReviews = state.animalReviews
        return Object.assign({}, state, {
            animalReviews: [...animalReviews, review]
        })
    }
    return state
}
function allReviews(state, action) {
    return Object.assign({}, state, {
        animalReviews: action.reviews 
    })
}
export function animalsReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_ANIMAL:
        return addAnimal(state, action);

        case ALL_ANIMALS: 
        return allAnimals(state, action)

        case ANIMAL_DETAILS: 
        return animalDetails(state, action)

        case MY_ANIMALS: 
        return mineAnimals(state, action)

        case DELETE_ANIMAL:
        return deleteAnimal(state, action)

        case CREATE_REVIEW:
            return submitReview(state, action);
            
        case ANIMAL_REVIEWS:
        return allReviews(state, action)

        case ANIMAL_REACTION: 
        return animalReaction(state, action)
        default: return state
    }
}