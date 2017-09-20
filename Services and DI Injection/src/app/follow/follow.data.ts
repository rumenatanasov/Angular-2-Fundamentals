import {Injectable} from '@angular/core'
import {FollowersInfo} from './followerInfo'
import {Http} from '@angular/http'
import 'rxjs/add/operator/toPromise'

let url = 'https://api.github.com/users/ivaylokenov/followers'

@Injectable()
export class FollowData {
    constructor(private http: Http){}
    getData(): Promise<Array<FollowersInfo>> {
        return this.http
        .get(url)
        .toPromise()
        .then(resp => resp.json() as FollowersInfo[])
        .catch(err => {
            console.log(err)
        })
    }
} 