import { Component, OnInit } from '@angular/core';

import { ArchiveService } from "src/app/services/archive.service";
import { ReservationService } from "src/app/services/reservation.service";

import { FormsModule }   from '@angular/forms';




import reservations from "./../reservations-list";

import { Reservation } from "./../reservation.model";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html', 
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  public reservationslist: any= [];
  totalPersonnes: number = 0;

  reservationObj={
    clientname: ""
   
  }


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
  
    private archiveService: ArchiveService,
    private reservationService: ReservationService,
    
  ) { }

  ngOnInit(): void {

this.compterTotalPersonnes();

// this.reservationService.all().subscribe(

//   res => this.reservationslist =res

// );
this.getLatestReservation();

  }

  ajouter(formObj: Reservation ){
    this.reservationService.create(formObj).subscribe((response)=>{
      this.getLatestReservation();
     }
     );}

     supprimer(reservation: any){
this.reservationService.delete(reservation).subscribe(()=>{
  this.getLatestReservation();
});
     }
     modifier(){

     }

     getLatestReservation(){
       this.reservationService.all().subscribe((response)=>{
         this.reservationslist = response
       });
     }
  


//this.archiveContent = this.archiveService.get();
//console.log(this.reservationslist)


  public addToArchive(id: string): void {


    this.archiveService.add(id);

   // this.archiveContent.filter(elem => elem.id == id)[0] ? this.archiveContent.filter(elem => elem.id)[0].sortie ++ : this.archiveContent.push({id: id, sortie:1});
 
// if(!this.archiveContent.filter(elem => elem.id == id)[0])
// this.archiveContent.push({id: id, sortie: true});


}

compterTotalPersonnes(){
  // for(let index=0; index<this.reservationslist.length; index++){
  //    this.totalPersonnes = this.reservationslist[index].nbradultes + this.reservationslist[index].nbrenfants;
  //  }

  this.reservationslist.forEach((item: { nbrenfants: number; nbradultes: number;})=>{

     this.totalPersonnes = item.nbrenfants + item.nbradultes;
   }

   );
}

}
