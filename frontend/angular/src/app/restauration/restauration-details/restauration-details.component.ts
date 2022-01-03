import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute} from "@angular/router";
import { Restauration } from 'src/app/restauration.model';
import restaurations from 'src/app/restaurations-list';
import { ConfirmationService } from "src/app/services/confirmation.service"

@Component({
  selector: 'app-restauration-details',
  templateUrl: './restauration-details.component.html',
  styleUrls: ['./restauration-details.component.css']
})
export class RestaurationDetailsComponent implements OnInit {

  public restauration?: Restauration ;
  constructor( 
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const restaurationId = params.get("id");
    this.restauration =  restaurations.filter(restauration => restauration.id == restaurationId)[0];
  });
}

public addToCart(): void{
  this.confirmationService.add(this.restauration?.id);

}



}
