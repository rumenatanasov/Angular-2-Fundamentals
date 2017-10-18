import { initialState } from './cars.state';
import {
    ADD_CAR, GET_CARS, CAR_DETAILS, CAR_LIKE, CAR_ADD_REVIEW,
    CAR_REVIEWS, DELETE_CAR, MINE_CARS
} from './cars.actions';
function addCar(state, action) {
    const result = action.result
    return Object.assign({}, state, {
        carAdded: result.success,
        carAddedId: result.success ? result.car.id : null
    })
}
function allCars(state, action) {
    return Object.assign({}, state, {
        allCars: action.cars
    })
}

function mineCars(state, action) {
    return Object.assign({}, state, {
        myCars: action.cars
    })
}
function carDetails(state, action) {
    return Object.assign({}, state, {
        carDetails: action.car
    })
}

function carLike(state, action) {
    if (action.result.success) {
        const currentCarLikes = state.carDetails.likes
        const carDetails = Object.assign({}, state.carDetails, {
            likes: currentCarLikes + 1
        })
        return Object.assign({}, state, {
            carDetails
        })
    }
    return state

}
function submitReview(state, action) {
    const result = action.result;
    if (result.success) {
        const review = result.review
        const carReviews = state.carReviews
        return Object.assign({}, state, {
            carReviews: [...carReviews, review]
        })
    }
    return state
}
function allReviews(state, action) {
    return Object.assign({}, state, {
        carReviews: action.reviews 
    })
}
function deleteCar(state, action) {
    const result = action.result;
    if (result.success) {
        const id = action.id
        const carIndex = state.myCars.findIndex(c => c.id === id)

        if (carIndex >= 0) {
            const myCars = state.myCars.slice(0)
           myCars.splice(carIndex, 1)
            return Object.assign({}, state, {
                myCars
            })
        }
    }
    return state
}

export function carsReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_CAR:
            return addCar(state, action);

        case GET_CARS:
            return allCars(state, action)

        case CAR_DETAILS:
            return carDetails(state, action)

        case CAR_LIKE:
            return carLike(state, action);

        case CAR_ADD_REVIEW:
            return submitReview(state, action);

        case CAR_REVIEWS:
            return allReviews(state, action);

            case DELETE_CAR:
            return deleteCar(state, action);

            case MINE_CARS: 
            return mineCars(state, action);
        default: return state
    }

}