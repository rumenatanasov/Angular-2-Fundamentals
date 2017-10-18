import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarRoutesModule } from './routes.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { CoreModule } from './core/core.module';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store, IAppState } from './store'
import { StatsModule } from './stats/stats.module';
import { AuthService } from './core/auth.service';
import { config } from './core/config'
import { CarsModule } from './cars/cars.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, UsersModule, CarRoutesModule, CoreModule, HttpModule, CarsModule,
    StatsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
    private authService: AuthService,
    router: Router
  ) {
    this.ngRedux.provideStore(store)
    config(ngRedux, router, authService)
  }
}
