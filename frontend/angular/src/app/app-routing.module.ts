import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurationComponent } from './restauration/restauration.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ActiviteComponent } from './activite/activite.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReservationdetailsComponent } from './reservation/reservationdetails/reservationdetails.component';
import { ArchiveComponent } from './archive/archive.component';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule }   from '@angular/forms';


const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'restauration', component: RestaurationComponent },
  { path: 'utilisateur', component: UtilisateurComponent },
  {path: 'reservation', component: ReservationComponent},
  {path: 'reservation/:id', component: ReservationdetailsComponent},
  {path: 'archive', component: ArchiveComponent},

  {path: 'activite', component: ActiviteComponent},
  {path: '**', component: NotFoundComponent}
  
] ;

@NgModule({
  imports: [ RouterModule.forRoot(routes) , CommonModule, BrowserModule,FormsModule,ReactiveFormsModule],

  exports: [RouterModule],
  declarations: [
    RestaurationComponent,
    UtilisateurComponent,
    ReservationComponent,
    ArchiveComponent,
    ActiviteComponent,
    HomeComponent
  ]
})
export class AppRoutingModule { 
  
}
class MyComponentModule {}
