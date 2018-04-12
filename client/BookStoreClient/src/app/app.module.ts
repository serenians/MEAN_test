import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BookComponent } from './component/book/book.component';

// const appRoutes : Routes = [
//   {path: '', component: AppComponent},
//   {path: '/book', component: BookComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatIconModule,
    BrowserAnimationsModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
