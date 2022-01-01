import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import reservations from '../reservations-list';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  //private apiUrl = "http://localhost:3000/reservations"

  private apiUrl = "http://localhost:3000/api/reservations"
 
 
  //private apiUrl = "https://my-json-server.typicode.com/eya-ghazouani/public-reservations-api/reservations";

  constructor( private http: HttpClient) { }

  /**
   * Get All reservations 
   */
  all(){

    return this.http.get(this.apiUrl);

  }
/**
 * 
 * @param id : reservation id
 */
  get(id : string){

    return this.http.get(this.apiUrl + '/' + id);
  }
/**
 * 
 * @param reservation new reservation to create
 */
  create(reservation: any ){

    return this.http.post(this.apiUrl, reservation);

  }
/**
 * 
 * @param id  reservation id to update
 * @param reservation new reservation data
 */
  update(reservation: any){

    return this.http.put(this.apiUrl + '/' + reservation._id, reservation);
  }
/**
 * 
 * @param id reservation id to delete
 */
  delete(id: string){
    return this.http.delete(this.apiUrl + '/' + id);

  }
}
