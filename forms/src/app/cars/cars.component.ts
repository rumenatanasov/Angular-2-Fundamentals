import { Component, OnInit } from '@angular/core';
import { DataService } from '../..//service/data.service';
import { PagerService } from '../home/pager.service'
@Component({
    selector: 'cars',
    templateUrl: './cars.component.html',
    providers: []
})
export class CarsComponent implements OnInit {
    cars: Array<any>

    constructor(private data: DataService, private pagerService: PagerService) { }
    private allItems: any[];
    pager: any = {}
    pagedItems: any[]

    ngOnInit() {
        this.data.allCars().then(data => {
            this.cars = data
            this.allItems = data
            this.pagedItems = data
            this.setPage(1)
        })
    }
     setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page, 5);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}