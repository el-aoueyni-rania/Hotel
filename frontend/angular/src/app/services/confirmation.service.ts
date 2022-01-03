import { Injectable } from '@angular/core';
import { LocalStorageService } from "src/app/services/local-storage.service"
import { Restauration } from "src/app/restauration.model"


@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {


  public confirmContent : any = [];

  constructor(

    private localStorageService: LocalStorageService
  ) {

    this.confirmContent = this.load();

  }

  add(confirmationId? : String){
    
    this.confirmContent.filter((elem: Restauration) => elem.id === confirmationId)[0] ? this.confirmContent.filter((elem: Restauration) => elem.id === confirmationId)[0].commande : this.confirmContent.push({id : confirmationId, commande: 1});
    // equivalent to
    /* if(this.cartContent.filter(elem => elem.id == id ) [0] ){
      this.cartContent.filter(elem => elem.id == id ) [0].quantity++
    }else{
      this.cartContent.push({id : id, quantity: 1});
    }
     */

  }
  load(){
    return this.localStorageService.get('confirm')
  }

  clear(){
    this.confirmContent =[];
    this.localStorageService.set('confirm', this.confirmContent);
  }
  // public get(){
  // return this.cartContent;
  // }
}
