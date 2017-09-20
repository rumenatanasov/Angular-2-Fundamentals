import {Injectable} from '@angular/core'
import {Cars} from './car'
import {CARS} from './mock-cars'

Injectable()
export class CarsService {
    getCars(): Promise<Cars[]> {
        return Promise.resolve(CARS)
    }
    getCar(id: number): Promise<Cars> {
        return this.getCars().then(cars => cars.find(car => car.id === id))
    } 
}