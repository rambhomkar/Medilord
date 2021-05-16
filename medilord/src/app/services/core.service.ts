import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Doctors} from './../modals/Doctors';
import { catchError, map } from 'rxjs/internal/operators';
@Injectable({
  providedIn: 'root'
})
export class CoreService {
  public doctorlist: Doctors[] = [];
  constructor(private http: HttpClient) { }

  getDoctorlist():Observable<Doctors[]>{ 
    const url = './assets/json/doctorlist.json'
    return this.http.get<Doctors[]>(url).pipe(
      map(x => {
        this.doctorlist = x;
        return this.doctorlist;
      })
    );
    
  }
   
}
