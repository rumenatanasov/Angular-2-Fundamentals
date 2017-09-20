import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataService} from '../service/data.service'
import { AppComponent } from './app.component';
import {AppRoutesModule} from './routes.module';
import {HomeComponent} from './home/home.component';
import {PagerService} from './home/pager.service';
//import {BorderRadiusDirective} from './Directives/border-radius.directive'
@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutesModule
  ],
  providers: [DataService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
