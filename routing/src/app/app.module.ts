import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarsModule} from './cars/cars.module'
///import {CarDetailsModule} from './cardetails/car-details.module';
import {HomeComponent} from './routes/home.component'
import { AppComponent } from './app.component';
import {AppRoutesModule} from './routes.module';
import {CarDetailsModule} from './cardetails/car-details.module'

@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule, CarsModule, AppRoutesModule, CarDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
