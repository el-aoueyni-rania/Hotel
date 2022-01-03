import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute} from "@angular/router";
import { Utilisateur } from 'src/app/utilisateur.model';
import utilisateurs from 'src/app/utilisateurs-list';
@Component({
  selector: 'app-utilisateur-details',
  templateUrl: './utilisateur-details.component.html',
  styleUrls: ['./utilisateur-details.component.css']
})
export class UtilisateurDetailsComponent implements OnInit {

  public utilisateur?: Utilisateur ;

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const utilisateurId = params.get("userId");
    this.utilisateur =  utilisateurs.filter(utilisateur => utilisateur.userId == utilisateurId)[0];
  });

}
}
