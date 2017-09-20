import {Injectable} from '@angular/core';
import {data} from '../Data';

@Injectable()
export class DataService {
    allCars(): Promise<any> {
        return data.allCars()
    }
    getCar(id): Promise<any> {
        return data.getCar(id)
    }
    allOwners(): Promise<Array<{}>> {
        return data.getOwners()
    }
    getOwner(id): Promise<any> {
        return data.getOwner(id)
    }
    createCar(car): Promise<any> {
        return data.createCar(car)
    }
    createOwner(owner): Promise<any> {
        return data.createOwner(owner)
    }
    createComment(car, content) {
        return data.createComment(car, content)
    }
    editCar(car): Promise<any> {
        return data.editCar(car)
    }
      getCommentById (id): Promise<any> {
    return data.getCommentById(id)
  }
    editComment(id, content): Promise<any> {
        return data.editComment(id, content)
    }
    editOwner(owner): Promise<any> {
        return data.editOwner(owner)
    }
    
}