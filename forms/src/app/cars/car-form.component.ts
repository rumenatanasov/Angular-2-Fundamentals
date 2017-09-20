import {Component, OnInit} from '@angular/core';
import {Car} from './cars';
import {DataService} from '../../service/data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'car-form',
    templateUrl: './car-form.component.html'
})

export class CarFormComponent implements OnInit {
    car: Car;
    owners: Array<{}>

    constructor(private data: DataService,
                private router: Router){
        this.car = new Car(null, '', '', '', '', null, null, '', null, '')
    }
    ngOnInit() {
        this.data.allOwners().then(owners => this.owners = owners)
    }
    onSubmit() {
        this.data.createCar(this.car).then(car => console.log('Car Created'));
        this.router.navigate(['./cars/all'])
    }
}