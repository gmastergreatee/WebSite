import { AppComponent } from './app.component';
import { BaseRedirectorComponent } from './components/base-redirector/base-redirector.component';
import { BlogComponent } from './components/blog/blog.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: 'redirectToBase', pathMatch: 'full' },
    { path: 'blog/:id', component: BlogComponent, pathMatch: 'prefix' },
    { path: 'redirectToBase', component: BaseRedirectorComponent },
    { path: '**', redirectTo: 'redirectToBase' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
