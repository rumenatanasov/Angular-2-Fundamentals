import { Component, OnInit } from '@angular/core';
import { Car } from './cars';
import { DataService } from '../../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'car-edit',
    templateUrl: './edit-car.component.html'
})

export class EditCarComponent implements OnInit {
    car: Car;
    owners: Array<{}>;
    id: number;

    constructor(private dataService: DataService,
        private router: ActivatedRoute,
        private route: Router) {
        this.id = Number(this.router.snapshot.paramMap.get('id'))
    }
    ngOnInit() {
        this.dataService.getCar(this.id).then(data => this.car = data)
        this.dataService.allOwners().then(owners => this.owners = owners)
    }
    onSubmit() {
        this.dataService.editCar(this.car).then(car => console.log('Car Edited'))
          this.route.navigate([`./car/details/${this.car.id}`])
    }
}