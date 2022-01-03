import { Component, OnInit } from '@angular/core';
import restaurations from '../restaurations-list';
import { Restauration } from '../restauration.model';
import { ConfirmationService } from "src/app/services/confirmation.service"
@Component({
  selector: 'app-restauration',
  templateUrl: './restauration.component.html',
  styleUrls: ['./restauration.component.css']
})
export class RestaurationComponent implements OnInit {

  public restaurationsList : Restauration[] = restaurations;
  //public cartContent: any[]= [] ;

  constructor(
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
   //this.cartContent = this.confirmationService.get();
  }

  // DRY : Don't Repeat Yourself
  public addToCart(id : String):void{

   this.confirmationService.add(id);
  }

}
