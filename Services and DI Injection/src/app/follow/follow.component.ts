import { Component, OnInit } from '@angular/core'
import { FollowData } from './follow.data'
import { FollowersInfo } from './followerInfo'

@Component({
    selector: 'followers',
    template: `<button (click)="show()">{{buttonText}} Followers</button><div *ngIf='showList'><ul *ngFor="let follower of followersInfo"><img src={{follower.avatar_url}}/> <p>Username: {{follower?.login}}</p>  Profile Page: <a href={{follower.html_url}}>Click Here</a></ul></div>`,
    providers: [FollowData]
})
export class FollowComponent implements OnInit {
    showList = false
    buttonText = 'Show'
    followersInfo;
    constructor(private followData: FollowData) { }
    ngOnInit() {
        this.followData.getData()
            .then(followInfo => {
                this.followersInfo = followInfo
               //followInfo.forEach(follower => {
                   //console.log(follower)
                //this.followersInfo.push(follower) 
               })
               
                


            
    }
    show() {
        this.showList = !this.showList
        
        if(this.showList) {
            this.buttonText = 'Hide'
        } else {
            this.buttonText = 'Show'
        }

        
    }
}