import { Component, OnInit } from '@angular/core';

import reservations from "./../reservations-list";

import { Reservation } from "./../reservation.model";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  public reservationslist: Reservation[]= reservations;

  // public reservation ={
  //   clientname :"aya",
  //   datearrivee :"10-04-2000",
  //   nbrnuits : 4,
  //   nbrenfants : 3,
  //   nbradultes : 2,
  //   nbrchambres : 4,
  //   active : true

  // };

  constructor() { }

  ngOnInit(): void {

    //console.log(this.reservationslist);
  }

}
