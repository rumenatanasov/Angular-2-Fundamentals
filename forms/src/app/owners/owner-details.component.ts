import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'owner-details',
    templateUrl: './owner-details.component.html'
})
export class OwnerDetailsComponent implements OnInit {
    owner: {};
    id: number;

    constructor(private data: DataService, private route: ActivatedRoute){
        this.id = Number(this.route.snapshot.paramMap.get('id'))
    }
    ngOnInit() {
        this.data.getOwner(this.id).then(data => this.owner = data)
    }
}