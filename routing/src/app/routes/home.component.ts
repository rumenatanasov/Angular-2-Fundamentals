import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars/cars.service'
import { Cars } from '../cars/car'
import { PagerService } from '../cars/pager.service'
//import {OrderByPipe} from './orderby'
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [CarsService, PagerService]
})
export class HomeComponent {
    cars: Cars[]
    constructor(private carService: CarsService,
        private pagerService: PagerService) { }
    private allItems: any[];
    pager: any = {};
    pagedItems: any[];

    ngOnInit(): void {
        this.getCars()

    }

    getCars(): void {
        this.carService.getCars().then(rumen => {
            this.cars = rumen
            this.allItems = rumen;
            this.pagedItems = rumen;
            this.setPage(1)

        })
    }
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page, 6);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}