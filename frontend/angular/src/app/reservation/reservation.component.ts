import { Component, OnInit } from '@angular/core';

import { ArchiveService } from "src/app/services/archive.service";

import reservations from "./../reservations-list";

import { Reservation } from "./../reservation.model";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  public reservationslist: Reservation[]= reservations;

//public archiveContent: any[] =[];

  // public reservation ={
  //   clientname :"aya",
  //   datearrivee :"10-04-2000",
  //   nbrnuits : 4,
  //   nbrenfants : 3,
  //   nbradultes : 2,
  //   nbrchambres : 4,
  //   active : true

  // };

  constructor(
    private archiveService: ArchiveService
  ) { }

  ngOnInit(): void {



//this.archiveContent = this.archiveService.get();
//console.log(this.reservationslist)
  }

  public addToArchive(id: string): void {


    this.archiveService.add(id);

   // this.archiveContent.filter(elem => elem.id == id)[0] ? this.archiveContent.filter(elem => elem.id)[0].sortie ++ : this.archiveContent.push({id: id, sortie:1});
 
// if(!this.archiveContent.filter(elem => elem.id == id)[0])
// this.archiveContent.push({id: id, sortie: true});


}
}
