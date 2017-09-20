import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component'
import {FollowComponent} from './follow/follow.component'
import {ReposComponent} from './repos/repos.component'

 
@NgModule({
  declarations: [
    AppComponent, HomeComponent, FollowComponent, ReposComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
