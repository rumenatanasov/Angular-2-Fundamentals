import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalActions } from '../store/animals/animals.actions';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Component({
    selector: 'list-animals',
    templateUrl: 'list-animals.component.html'
})

export class ListAnimalsComponent implements OnInit {
    animals: Array<{}> = [];
    page: number = 1;
    searchText: string = '';
    constructor(private animalActions: AnimalActions,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private ngRedux: NgRedux<IAppState>) { }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.page = +params['page'] || 1
            this.searchText = params['search'];
            this.animalActions.allAnimals(this.page, this.searchText)
            this.ngRedux.select(state => state.animals.allAnimals)
                .subscribe(animals => this.animals = animals)
        })
    }
     search() {
        this.router.navigateByUrl(`animals/all?search=${this.searchText}`)
    }
    prevPage() {
        if (this.page === 1) {
            return
        }
        const url = this.getUrl(this.page - 1)
        this.router.navigateByUrl(url)
    }
    nextPage() {
        if (this.animals.length === 0) {
            return
        }
        const url = this.getUrl(this.page + 1)
        this.router.navigateByUrl(url)
    }
    private getUrl(page) {
        let url = `animals/all?page=${page}`
        if (this.searchText) {
            url += `&search=${this.searchText}`
        }
        return url

    }
}