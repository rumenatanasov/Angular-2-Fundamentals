export interface IAnimalState {
    animalAdded: boolean,
    animalAddedId: number,
    allAnimals: Array<{}>,
    animalDetails: object,
    myAnimals: Array<object>,
    animalReviews: Array<object>
    
}

export const initialState: IAnimalState = {
    animalAdded: false,
    animalAddedId: null,
    allAnimals: [],
    animalDetails: {},
    myAnimals: [],
    animalReviews: []
    
}