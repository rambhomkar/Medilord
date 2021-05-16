import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchFilterPipe } from './helpers/search-filter.pipe';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { ServicesComponent } from './services-page/services.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FooterComponent } from './core/footer/footer.component';
import { CovidDoctorListComponent } from './covid-doctor-list/covid-doctor-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorsListComponent,
    SearchFilterPipe,
    HomeComponent,
    HeaderComponent,
    ServicesComponent,
    HowItWorksComponent,
    FooterComponent,
    CovidDoctorListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
