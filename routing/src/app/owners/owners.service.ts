import {Injectable} from '@angular/core'
import {Owners} from './owners'
import {OWNERS} from './mock-owners'

Injectable()
export class OwnersService {
    getOwners(): Promise<Owners[]> {
        return Promise.resolve(OWNERS)
    }
    getOwner(id: number): Promise<Owners> {
        return this.getOwners().then(owners => owners.find(owner => owner.id === id))
    }
}