import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {ReposInfo} from './reposInfo'
import 'rxjs/add/operator/toPromise'
let url = 'https://api.github.com/users/ivaylokenov/repos'

@Injectable()
export class ReposData {
    constructor(private http: Http){}
    getData (): Promise<Array<ReposInfo>> {
         return this.http
        .get(url)
        .toPromise()
        .then(resp => resp.json() as ReposInfo[])
        .catch(err => {
            console.log(err)
        })
    }
}