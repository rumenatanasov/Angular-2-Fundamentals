import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ReadMoreComponent} from './read-more.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ReadMoreComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
