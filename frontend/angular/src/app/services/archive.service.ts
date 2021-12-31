import { Injectable } from '@angular/core';
import { LocalStorageService } from "src/app/services/local-storage.service";
import {  Reservation} from "src/app/reservation.model";


@Injectable({
  providedIn: 'root'
})
export class ArchiveService {


public archiveContent: any =[];

  constructor(

    private localStorageService: LocalStorageService
  ) {

    this.archiveContent = this.load();

   }

  add(ArchReservID?: string ){

    if(!this.archiveContent.filter((elem: Reservation) => elem.id == ArchReservID)[0])
this.archiveContent.push({id: ArchReservID, sortie: true});

this.localStorageService.set('archive',this.archiveContent);

  }

  load(){
   return this.localStorageService.get('archive');
  }

  clear(){
    this.archiveContent =[];
    this.localStorageService.set('archive', this.archiveContent);
  }
  // public get(){
  //   return this.archiveContent;

  // }
}
