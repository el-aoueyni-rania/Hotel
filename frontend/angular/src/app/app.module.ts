import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RestaurationComponent } from './restauration/restauration.component';
import { AppRoutingModule } from './app-routing.module';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';


const routes: Routes = [] ;
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestaurationComponent,
    UtilisateurComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }