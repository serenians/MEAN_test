import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { HomeComponent } from './component/home/home.component'
import { BookComponent } from './component/book/book.component'

export const router: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path:'book',
        component: BookComponent
    }

]

export const routes : ModuleWithProviders = RouterModule.forRoot(router);