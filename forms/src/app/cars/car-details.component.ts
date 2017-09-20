import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'car-details',
    templateUrl: './car-details.component.html'
})
export class CarDetailsComponent implements OnInit {
    car: {};
    id: number;
    content: string = '';

    constructor(private data: DataService,
        private route: ActivatedRoute) {
        this.id = Number(this.route.snapshot.paramMap.get('id'))
    }
    ngOnInit() {
        this.data.getCar(this.id).then(data => this.car = data)
    }
    onSubmit() {
        this.data.createComment(this.id, this.content)
        this.data.getCar(this.id).then(data => this.car = data)
        this.content = ''
    }
}