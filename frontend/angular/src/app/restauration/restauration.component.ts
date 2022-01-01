import { Component, OnInit } from '@angular/core';
import restaurations from '../restaurations-list';
import { Restauration } from '../restauration.model';
@Component({
  selector: 'app-restauration',
  templateUrl: './restauration.component.html',
  styleUrls: ['./restauration.component.css']
})
export class RestaurationComponent implements OnInit {

  public restaurationsList : Restauration[] = restaurations;
  constructor() { }

  ngOnInit(): void {
    //console.log(this.restaurationsList);
  }

}
