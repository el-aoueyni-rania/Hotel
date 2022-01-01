import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute} from "@angular/router";
import { Restauration } from 'src/app/restauration.model';
import restaurations from 'src/app/restaurations-list';
@Component({
  selector: 'app-restauration-details',
  templateUrl: './restauration-details.component.html',
  styleUrls: ['./restauration-details.component.css']
})
export class RestaurationDetailsComponent implements OnInit {

  public restauration?: Restauration ;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const restaurationId = params.get("id");
    this.restauration =  restaurations.filter(restauration => restauration.id == restaurationId)[0];
  });

}
}
