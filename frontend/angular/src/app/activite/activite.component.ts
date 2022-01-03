import { Component, OnInit } from '@angular/core';
import activites from '../activite-list';
import { Activite } from '../activite.model';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {
  public activitiesList : Activite[] = activites;
  constructor() { }

  ngOnInit(): void {
  
  }

}
