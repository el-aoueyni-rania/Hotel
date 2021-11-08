import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurationComponent } from './restauration/restauration.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [
  { path: 'restauration', component: RestaurationComponent },
  { path: 'utilisateur', component: UtilisateurComponent },
] ;

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
