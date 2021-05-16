import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { HomeComponent } from './home/home.component';
import {ServicesComponent} from './services-page/services.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component'
import { CovidDoctorListComponent } from './covid-doctor-list/covid-doctor-list.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'doctors',component:DoctorsListComponent},
  {path:'services', component: ServicesComponent},
  {path:'how-it-works', component:HowItWorksComponent},
  {path:'covid-doctors-list', component:CovidDoctorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
