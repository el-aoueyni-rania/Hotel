import { Component, OnInit } from '@angular/core';
import { ArchiveService } from "src/app/services/archive.service";
import { reservations } from "src/app/reservations-list";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  public archiveContent: any = [];
  constructor( private archiveService: ArchiveService) { }

  ngOnInit(): void {
 this.getArchiveContentDetails();
  }

  getArchiveContentDetails(){
    this.archiveContent = this.archiveService.archiveContent;

    for (let index = 0; index< this.archiveContent.length; index++){

      const reservation = reservations.filter(reservation => reservation.id== this.archiveContent[index].id)[0];
    this.archiveContent[index].clientname = reservation.clientname;
    this.archiveContent[index].datearrivee = reservation.datearrivee;

    }
  }

  clearArchive(){
    this.archiveService.clear();
    this.ngOnInit();
  }
  

}
