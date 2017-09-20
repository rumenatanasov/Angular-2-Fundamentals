import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {GithubProfileInfo} from './githubProfileInfo'
import 'rxjs/add/operator/toPromise'
const url = 'https://api.github.com/users/ivaylokenov'
const urlContributors = 'https://api.github.com/repos/ivaylokenov'
//let article = new Article('kolio', 'koi')


@Injectable()
export class HomeData {
    constructor(private http: Http){}
    getData (): Promise<GithubProfileInfo> {
       return this.http
       .get(url)
       .toPromise()
       .then(resp => resp.json() as GithubProfileInfo)
       .catch(err => {
           console.log(err)
           //return new GithubProfileInfo()
       })
    }
    
}