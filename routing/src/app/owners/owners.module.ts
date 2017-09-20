import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OwnerComponent } from './owners.component'
import { OwnersService } from './owners.service'
import { AppRoutesModule } from '../routes.module'
import {OwnersDetailsComponent} from './owners-details.component'

@NgModule({
    imports: [CommonModule, AppRoutesModule],
    declarations: [OwnerComponent, OwnersDetailsComponent],
    providers: [OwnersService],
    exports: [OwnerComponent]
})
export class OwnersModule{}