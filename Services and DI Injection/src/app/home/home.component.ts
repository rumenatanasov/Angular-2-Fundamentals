import { Component, OnInit } from '@angular/core'
import { HomeData } from './home.data'
import {GithubProfileInfo} from './githubProfileInfo'
@Component({
    selector: 'home',
    template: '<h1>Profile Data:</h1><p>Username: {{githubProfileInfo?.login}}</p> <img src={{githubProfileInfo?.avatar_url}} /> <p>Bio: {{githubProfileInfo?.bio}}<p>Followers: {{githubProfileInfo?.followers}}</p><p>Company: {{githubProfileInfo?.company}}</p>',
    providers: [HomeData]
})
export class HomeComponent implements OnInit {
    githubProfileInfo: GithubProfileInfo
    constructor(private homeData: HomeData) {
       
    }
    ngOnInit() {
       this.homeData.getData()
       .then(profileInfo => {
           console.log(profileInfo)
           this.githubProfileInfo = profileInfo
       })
    }
}