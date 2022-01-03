import { Component, OnInit } from '@angular/core';
import utilisateurs from '../utilisateurs-list';
import { Utilisateur } from '../utilisateur.model';
@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  public utilisateursList : Utilisateur[] = utilisateurs;
  constructor() { }

  ngOnInit(): void {
  }

}
