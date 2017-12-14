import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms';
import {AddAnimalComponent} from './add-animal.component';
import {AnimalsService} from './animals.service';
import {AnimalActions} from '../store/animals/animals.actions';
import {ListAnimalsComponent} from './list-animals.component';
import {AnimalDetails} from './animal-details.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [AddAnimalComponent, ListAnimalsComponent, AnimalDetails],
    providers: [AnimalsService, AnimalActions],
    
})

export class AnimalModule{

}