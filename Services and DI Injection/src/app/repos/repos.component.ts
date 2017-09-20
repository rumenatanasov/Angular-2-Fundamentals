import { Component, OnInit } from '@angular/core'
import { ReposData } from './repo.data'
import { ReposInfo } from './reposInfo'

@Component({
    selector: 'repos',
    template: '<button (click)="show()">{{buttonText}} Repos</button><div *ngIf=showList><ul *ngFor="let repo of reposInfo"><p>Name: {{repo.name}}</p> Fullname: {{repo.full_name}} <p>Link for repo: <a href={{repo.html_url}}>Link</a></ul></div>',
    providers: [ReposData]
})
export class ReposComponent implements OnInit {
    showList = false
    buttonText = 'Show'
    reposInfo;
    constructor(private reposData: ReposData) { }
    ngOnInit() {
        this.reposData.getData()
            .then(repoInfo => {
                this.reposInfo = repoInfo
                })       
    }
    show() {
        this.showList = !this.showList
        if (this.showList) {
            this.buttonText = 'Hide'
        } else {
            this.buttonText = 'Show'
        }
    }
}