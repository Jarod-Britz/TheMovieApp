import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, 
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatAutocompleteModule,
  MatIconModule
} from '@angular/material';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from "@angular/common/http";
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from '@angular/fire';
import { Observable } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatAutocompleteModule,
    HttpClientModule,
    AngularFireModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class MovieApp {
  items: Observable<any[]>;
  constructor(db: AngularFirestore){
    this.items = db.collection('items').valueChanges();
  }
}