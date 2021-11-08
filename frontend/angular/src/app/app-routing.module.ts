import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurationComponent } from './restauration/restauration.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: 'restauration', component: RestaurationComponent },
  { path: 'utilisateur', component: UtilisateurComponent },
  {path: 'reservation', component: ReservationComponent},
] ;

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
