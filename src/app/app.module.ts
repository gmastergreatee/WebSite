import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FullData } from './datastore/full-data.model';
import { RootData } from './datastore/root-data.model';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    RootData,
    FullData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
