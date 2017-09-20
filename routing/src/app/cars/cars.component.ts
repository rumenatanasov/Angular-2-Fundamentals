import { Component, OnInit } from '@angular/core';
import { Cars } from './car';
import { CarsService } from './cars.service';
import { PagerService } from './pager.service';
import { Observable } from 'rxjs/Observable'
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {OwnersService} from '../owners/owners.service'
import {Owners} from '../owners/owners'
import 'rxjs/add/operator/map'
@Component({
    selector: 'cars',
    templateUrl: './cars.component.html',
    providers: [PagerService]
})
export class CarsComponent implements OnInit {
    owners: Owners[]
    cars: Cars[];
    selectedCar: Cars;
    constructor(private carService: CarsService,
    private ownersService: OwnersService,
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
        this.pager = this.pagerService.getPager(this.allItems.length, page, 10);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
    sortByMake() {
        this.cars.sort((a, b) => {
            return a.make.localeCompare(b.make)
        })
        this.setPage(this.pager.currentPage)
    }
    sortByOwner() {
        this.cars.sort((a, b) => {
          return a.engine.localeCompare(b.engine)
        })
        this.setPage(this.pager.currentPage)
    }
}