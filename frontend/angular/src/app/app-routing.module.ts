import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurationComponent } from './restauration/restauration.component';

const routes: Routes = [
  { path: 'restauration', component: RestaurationComponent },
] ;

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
