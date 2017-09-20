import {Component, OnInit} from '@angular/core'
import {Owner} from './owner'
import {DataService} from '../../service/data.service'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'edit-owner',
  templateUrl: './edit-owner.component.html'
})

export class EditOwnerComponent {
  owner: Owner;
  id: number;

  constructor (private data: DataService, private route: ActivatedRoute,
              private router: Router) {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit () {
    this.data.getOwner(this.id).then(data => this.owner = data)
  }

  onSubmit () {
    this.data.editOwner(this.owner).then(owner => console.log('Owner updated'));
    this.router.navigate([`./owners/details/${this.id}`])
  }
}