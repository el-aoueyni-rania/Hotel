import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from "src/app/services/confirmation.service"
import { restaurations } from "src/app/restaurations-list"

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  public confirmContent : any = [];

  constructor(
    private confirmationService: ConfirmationService

  ) { }

  ngOnInit(): void {
    this.confirmContent =  this.confirmationService.confirmContent;
    for(let index = 0; index < this.confirmContent.length; index++){
      const restauration = restaurations.filter(restauration => restauration.id == this.confirmContent[index].id)[0];
      this.confirmContent[index].nom_restaurant = restauration.nom_restaurant;
      this.confirmContent[index].menu = restauration.menu;
      this.confirmContent[index].fruits = restauration.fruits;
      this.confirmContent[index].boissons = restauration.boissons;
    }
  }

  clearConfirmation(){
    this.confirmationService.clear();
    this.ngOnInit();
  }

}
