import { Component, OnInit } from '@angular/core';
import { Doctors } from '../modals/Doctors';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-covid-doctor-list',
  templateUrl: './covid-doctor-list.component.html',
  styleUrls: ['./covid-doctor-list.component.scss']
})
export class CovidDoctorListComponent implements OnInit {
  searchDocField:string= '';
  doctorlist: Doctors[] = [];
  constructor(private coreServices: CoreService) { }

  ngOnInit(): void {
    this.coreServices.getDoctorlist().subscribe(resp => {
      if(resp){
        this.doctorlist = resp.filter(cItem => cItem.specialist.includes('Covid') );
      }
    })
  }

}
