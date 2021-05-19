import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TransferHttpCacheModule} from '@nguniversal/common'
import { SearchFilterPipe } from './helpers/search-filter.pipe';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { ServicesComponent } from './services-page/services.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FooterComponent } from './core/footer/footer.component';
import { CovidDoctorListComponent } from './covid-doctor-list/covid-doctor-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


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
    CovidDoctorListComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TransferHttpCacheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
