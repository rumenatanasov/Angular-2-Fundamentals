import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { PagerService } from '../home/pager.service'
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    cars: Array<{}>

    constructor(private data: DataService,
        private pagerService: PagerService) { }
    private allItems: any[];
    pager: any = {}
    pagedItems: any[]


    ngOnInit() {
        this.data.allCars().then(cars => {
            this.cars = cars
            this.allItems = cars 
            this.pagedItems = cars
            this.setPage(1)
        })
    }
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page, 2);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}