import {Component} from '@angular/core';
import {Owner} from './owner';
import {DataService} from '../../service/data.service';
import {Router} from '@angular/router';
@Component({
    selector: 'owner-form',
    templateUrl: './owners-form.component.html'
})
export class OwnerFormComponent {
    owner: Owner;

    constructor(private dataService: DataService,
                private router: Router){
        this.owner = {
            id: null,
            name: '',
            image: '',
            carsLength: 0,
            cars: []
        }
    }
    onSubmit () {
        this.dataService.createOwner(this.owner).then(owner => console.log('Owner created'))
        this.router.navigate([`/owners/all`])
    }
}