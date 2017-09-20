import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
    selector: 'owners',
    templateUrl: './owners.component.html'
})
export class OwnerComponent implements OnInit {
    owners: Array<any>;

    constructor(private data: DataService){}

    ngOnInit () {
        this.data.allOwners().then(data => this.owners = data)
    }
    
}