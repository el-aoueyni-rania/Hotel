import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurationComponent } from './restauration/restauration.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ActiviteComponent } from './activite/activite.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'restauration', component: RestaurationComponent },
  { path: 'utilisateur', component: UtilisateurComponent },
  {path: 'reservation', component: ReservationComponent},
  {path: 'activite', component: ActiviteComponent},
  
] ;

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
