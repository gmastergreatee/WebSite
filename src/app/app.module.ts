import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { FullData } from './datastore/full-data.model';
import { RootData } from './datastore/root-data.model';
import { BaseRedirectorComponent } from './components/base-redirector/base-redirector.component';
import { BlogManager } from './components/blog/blog-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BaseRedirectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RootData,
    FullData,
    BlogManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
