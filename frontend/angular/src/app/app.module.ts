import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { RestaurationComponent } from './restauration/restauration.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { ActiviteDetailsComponent } from './activite/activite-details/activite-details.component';

//import { ReservationdetailsComponent } from './reservation/reservationdetails/reservationdetails.component';
// import { UtilisateurComponent } from './utilisateur/utilisateur.component';
// import { ReservationComponent } from './reservation/reservation.component';
// import { ActiviteComponent } from './activite/activite.component';
// import { HomeComponent } from './home/home.component';


const routes: Routes = [] ;
@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    ActiviteDetailsComponent,
   // ReservationdetailsComponent,
    // RestaurationComponent,
    // UtilisateurComponent,
    // ReservationComponent,
    // ActiviteComponent,
    // HomeComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
