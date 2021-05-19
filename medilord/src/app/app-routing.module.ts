import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { HomeComponent } from './home/home.component';
import {ServicesComponent} from './services-page/services.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component'
import { CovidDoctorListComponent } from './covid-doctor-list/covid-doctor-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'home',component:HomeComponent , data:{title:'Medilord :: Home'}},
  {path:'doctors',component:DoctorsListComponent, data:{title:'Medilord :: Doctor List'}},
  {path:'services', component: ServicesComponent, data:{title:'Medilord :: Services'}},
  {path:'how-it-works', component:HowItWorksComponent, data:{title:'Medilord :: How It Works'}},
  {path:'covid-doctors-list', component:CovidDoctorListComponent, data:{title:'Medilord :: Covid-19 Doctor List'}},
  {path:'contact-us', component:ContactUsComponent, data:{title:'Medilord :: Contact-Us'}},
  {path:'', pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',

})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
