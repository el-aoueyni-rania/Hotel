import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute} from "@angular/router";
import { ArchiveService } from "src/app/services/archive.service";
import { Reservation } from 'src/app/reservation.model';
import {  reservations } from "src/app/reservations-list";

@Component({
  selector: 'app-reservationdetails',
  templateUrl: './reservationdetails.component.html',
  styleUrls: ['./reservationdetails.component.css']
})
export class ReservationdetailsComponent implements OnInit {

  
  public reservation?: Reservation;

  constructor( private route: ActivatedRoute,
    private archiveService: ArchiveService
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>{
      const reservationId = params.get("id");
      this.reservation = reservations.filter(reservation => reservation.id == reservationId)[0];
      

    });
  }

  public addToArchive(): void {

    this.archiveService.add(this.reservation?.id);

 }
  // getNbrEnfants(): Number{
  //   return this.reservation ? this.reservation.nbrenfants :0;

  // }
  // getNbrNuits(): Number{
  //   return this.reservation ? this.reservation.nbrnuits :0;

  // }getId(): string{
  //   return this.reservation ? this.reservation.id:"";

  // }getNbrAdultes(): Number{
  //   return this.reservation ? this.reservation.nbradultes :0;

  // }getNbrChambres(): Number{
  //   return this.reservation ? this.reservation.nbrchambres:0;

  // }

}
