import { Component, OnInit } from '@angular/core';
import { Activite } from 'src/app/activite.model';
import activites from 'src/app/activite-list';
import {  ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-activite-details',
  templateUrl: './activite-details.component.html',
  styleUrls: ['./activite-details.component.css']
})
export class ActiviteDetailsComponent implements OnInit {

  public activite?: Activite ;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const activiteId = params.get("id");
    this.activite =  activites.filter(activite => activite.id == activiteId)[0];
  });

  }

}
