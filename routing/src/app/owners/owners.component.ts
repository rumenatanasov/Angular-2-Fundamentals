import { Component, OnInit } from '@angular/core'
import { Owners } from './owners'
import { OwnersService } from './owners.service'
import { PagerService } from '../cars/pager.service'
@Component({
    selector: 'owners',
    templateUrl: './owner.component.html',
    providers: [PagerService]
})
export class OwnerComponent implements OnInit {
    showList = true;
    owners: Owners[];
    constructor(private ownerService: OwnersService,
        private pagerService: PagerService) { };
    private allItems: any[];
    pager: any = {};
    pagedItems: any[];
    ngOnInit(): void {
        this.getOwners()
    }
    getOwners(): void {
        this.ownerService.getOwners().then(owners => {
            this.owners = owners
            this.allItems = owners
            this.pagedItems = owners
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
    sortByName() {
        this.owners.sort((a,b) => {
           return b.name.localeCompare(a.name)
           
        })
        this.setPage(this.pager.currentPage)
        
    }
    ascending() {
        this.owners = this.owners.sort((a,b) => {
            return a.name.localeCompare(b.name)
        })
        this.setPage(this.pager.currentPage)
        
    }
}
