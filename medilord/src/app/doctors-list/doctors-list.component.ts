import { Component, ElementRef, OnInit } from '@angular/core';
import { Doctors } from '../modals/Doctors';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})


export class DoctorsListComponent implements OnInit {
  searchDocField:string= '';
  doctorlist: Doctors[] = []; 
  constructor(private coreServices: CoreService) { }
  // data = [
  //   {
  //     "id": 69330,
  //     "fullName": "Dr. Priya Prabhakaran, MBBS, MD",
  //     "firstName": "Priya",
  //     "familyName": "Prabhakaran",
  //     "title": "Dr",
  //     "gender": "F",
  //     "profileImage": null,
  //     "city": "Birmingham",
  //     "region": "Alabama",
  //     "countryCode": "US",
  //     "profileDescription": null,
  //     "profileShortDescription": "",
  //     "preferredLanguage": null,
  //     "slug": "priyaprabhakaran",
  //     "organizationId": null,
  //     "organizationName": null,
  //     "stars": 0,
  //     "numRatings": 0,
  //     "numCompleted": 0,
  //     "costPerAppointment": 0,
  //     "currency": "USD",
  //     "userType": "DOCTOR",
  //     "staffDoctor": false,
  //     "staffDoctorRequired": true,
  //     "status": "ACTIVE",
  //     "availableAppointments": [
  //       "2021-05-10T01:30:00Z",
  //       "2021-05-10T01:50:00Z",
  //       "2021-05-10T02:10:00Z",
  //       "2021-05-10T02:30:00Z",
  //       "2021-05-10T02:50:00Z",
  //       "2021-05-10T03:10:00Z",
  //       "2021-05-11T01:30:00Z",
  //       "2021-05-11T01:50:00Z",
  //       "2021-05-11T02:10:00Z",
  //       "2021-05-11T02:30:00Z",
  //       "2021-05-11T02:50:00Z",
  //       "2021-05-11T03:10:00Z",
  //       "2021-05-12T01:30:00Z",
  //       "2021-05-12T01:50:00Z",
  //       "2021-05-12T02:10:00Z",
  //       "2021-05-12T02:30:00Z",
  //       "2021-05-12T02:50:00Z",
  //       "2021-05-12T03:10:00Z",
  //       "2021-05-13T01:30:00Z",
  //       "2021-05-13T01:50:00Z"
  //     ],
  //     "medicalCertifications": [],
  //     "medicalSpecialities": [
  //       {
  //         "id": 142680,
  //         "name": "Pediatric Critical Care",
  //         "description": null
  //       },
  //       {
  //         "id": 142679,
  //         "name": "Pediatric Medicine",
  //         "description": null
  //       }
  //     ],
  //     "professionalHighlights": [],
  //     "education": [],
  //     "ratings": [],
  //     "languages": [
  //       {
  //         "id": "en",
  //         "description": "English"
  //       },
  //       {
  //         "id": "ta",
  //         "description": "Tamil"
  //       },
  //       {
  //         "id": "hi",
  //         "description": "Hindi"
  //       }
  //     ],
  //     "badges": [],
  //     "organizations": [
  //       {
  //         "id": 69179,
  //         "type": null,
  //         "slug": null,
  //         "name": "US American-Indian Physician COVID-19 Expert (Tamil)",
  //         "description": null,
  //         "htmlDescription": null,
  //         "logo": null,
  //         "logoFile": null
  //       }
  //     ],
  //     "online": false
  //   },
  //   {
  //     "id": 69626,
  //     "fullName": "Dr. Venkataraman Kalyanaraman, MD",
  //     "firstName": "Venkataraman ",
  //     "familyName": "Kalyanaraman",
  //     "title": "",
  //     "gender": "M",
  //     "profileImage": "https://mdtok-dev-public.s3.us-east-2.amazonaws.com/20210501/04b15acf-01ef-45dd-b1a0-c11758888c91.jpg",
  //     "city": "Oklahoma City",
  //     "region": "Oklahoma ",
  //     "countryCode": "US",
  //     "profileDescription": null,
  //     "profileShortDescription": "",
  //     "preferredLanguage": null,
  //     "slug": "vkalyan",
  //     "organizationId": null,
  //     "organizationName": null,
  //     "stars": 0,
  //     "numRatings": 0,
  //     "numCompleted": 0,
  //     "costPerAppointment": 0,
  //     "currency": "USD",
  //     "userType": "DOCTOR",
  //     "staffDoctor": false,
  //     "staffDoctorRequired": true,
  //     "status": "ACTIVE",
  //     "availableAppointments": [
  //       "2021-05-11T01:40:00Z",
  //       "2021-05-18T01:00:00Z",
  //       "2021-05-18T01:20:00Z",
  //       "2021-05-18T01:40:00Z",
  //       "2021-05-25T01:00:00Z",
  //       "2021-05-25T01:20:00Z",
  //       "2021-05-25T01:40:00Z",
  //       "2021-06-01T01:00:00Z",
  //       "2021-06-01T01:20:00Z",
  //       "2021-06-01T01:40:00Z",
  //       "2021-06-08T01:00:00Z",
  //       "2021-06-08T01:20:00Z",
  //       "2021-06-08T01:40:00Z"
  //     ],
  //     "medicalCertifications": [],
  //     "medicalSpecialities": [
  //       {
  //         "id": 71769,
  //         "name": "Endocrinology",
  //         "description": null
  //       }
  //     ],
  //     "professionalHighlights": [],
  //     "education": [],
  //     "ratings": [],
  //     "languages": [
  //       {
  //         "id": "ta",
  //         "description": "Tamil"
  //       },
  //       {
  //         "id": "en",
  //         "description": "English"
  //       }
  //     ],
  //     "badges": [],
  //     "organizations": [
  //       {
  //         "id": 69179,
  //         "type": null,
  //         "slug": null,
  //         "name": "US American-Indian Physician COVID-19 Expert (Tamil)",
  //         "description": null,
  //         "htmlDescription": null,
  //         "logo": null,
  //         "logoFile": null
  //       }
  //     ],
  //     "online": false
  //   },
  //   {
  //     "id": 100028,
  //     "fullName": "Dr Narmadha Kalyanaswamy, MD",
  //     "firstName": "Narmadha",
  //     "familyName": "Kalyanaswamy",
  //     "title": "Dr",
  //     "gender": "F",
  //     "profileImage": "https://mdtok-dev-public.s3.us-east-2.amazonaws.com/20210505/b53d67b4-2adf-48fe-91fa-e673e519e6c5.jpg",
  //     "city": "Austin",
  //     "region": "Texas",
  //     "countryCode": "US",
  //     "profileDescription": null,
  //     "profileShortDescription": "MD (Internal Medicine) ",
  //     "preferredLanguage": null,
  //     "slug": "kalyanaswamy",
  //     "organizationId": null,
  //     "organizationName": null,
  //     "stars": 0,
  //     "numRatings": 0,
  //     "numCompleted": 0,
  //     "costPerAppointment": 0,
  //     "currency": "USD",
  //     "userType": "DOCTOR",
  //     "staffDoctor": false,
  //     "staffDoctorRequired": true,
  //     "status": "ACTIVE",
  //     "availableAppointments": [
  //       "2021-05-12T15:30:00Z",
  //       "2021-05-12T15:45:00Z",
  //       "2021-05-12T16:00:00Z",
  //       "2021-05-12T16:15:00Z",
  //       "2021-05-12T16:30:00Z",
  //       "2021-05-12T16:45:00Z",
  //       "2021-05-13T15:00:00Z",
  //       "2021-05-13T15:15:00Z",
  //       "2021-05-13T15:30:00Z",
  //       "2021-05-13T15:45:00Z",
  //       "2021-05-13T16:00:00Z",
  //       "2021-05-13T16:15:00Z",
  //       "2021-05-13T16:30:00Z",
  //       "2021-05-13T16:45:00Z",
  //       "2021-05-14T15:00:00Z",
  //       "2021-05-14T15:15:00Z",
  //       "2021-05-14T15:30:00Z",
  //       "2021-05-14T15:45:00Z",
  //       "2021-05-14T16:00:00Z",
  //       "2021-05-14T16:15:00Z"
  //     ],
  //     "medicalCertifications": [],
  //     "medicalSpecialities": [
  //       {
  //         "id": 100227,
  //         "name": "Internal Medicine",
  //         "description": null
  //       }
  //     ],
  //     "professionalHighlights": [],
  //     "education": [],
  //     "ratings": [],
  //     "languages": [
  //       {
  //         "id": "te",
  //         "description": "Telugu"
  //       },
  //       {
  //         "id": "en",
  //         "description": "English"
  //       },
  //       {
  //         "id": "hi",
  //         "description": "Hindi"
  //       },
  //       {
  //         "id": "ta",
  //         "description": "Tamil"
  //       }
  //     ],
  //     "badges": [],
  //     "organizations": [
  //       {
  //         "id": 69179,
  //         "type": null,
  //         "slug": null,
  //         "name": "US American-Indian Physician COVID-19 Expert (Tamil)",
  //         "description": null,
  //         "htmlDescription": null,
  //         "logo": null,
  //         "logoFile": null
  //       }
  //     ],
  //     "online": false
  //   },
  //   {
  //     "id": 71824,
  //     "fullName": "Dr. Sowmya Krishnan MD",
  //     "firstName": "Sowmya",
  //     "familyName": "Krishnan",
  //     "title": "",
  //     "gender": "F",
  //     "profileImage": null,
  //     "city": "Oklahoma City",
  //     "region": "Oklahoma",
  //     "countryCode": "US",
  //     "profileDescription": null,
  //     "profileShortDescription": "",
  //     "preferredLanguage": null,
  //     "slug": "sowmyakrishnan",
  //     "organizationId": null,
  //     "organizationName": null,
  //     "stars": 0,
  //     "numRatings": 0,
  //     "numCompleted": 0,
  //     "costPerAppointment": 0,
  //     "currency": "USD",
  //     "userType": "DOCTOR",
  //     "staffDoctor": false,
  //     "staffDoctorRequired": true,
  //     "status": "ACTIVE",
  //     "availableAppointments": [
  //       "2021-05-13T01:00:00Z",
  //       "2021-05-13T01:20:00Z",
  //       "2021-05-13T01:40:00Z",
  //       "2021-05-20T01:00:00Z",
  //       "2021-05-20T01:20:00Z",
  //       "2021-05-20T01:40:00Z",
  //       "2021-05-20T02:00:00Z",
  //       "2021-05-20T02:20:00Z",
  //       "2021-05-20T02:40:00Z",
  //       "2021-05-27T01:00:00Z",
  //       "2021-05-27T01:20:00Z",
  //       "2021-05-27T01:40:00Z",
  //       "2021-05-27T02:00:00Z",
  //       "2021-05-27T02:20:00Z",
  //       "2021-05-27T02:40:00Z",
  //       "2021-06-03T01:00:00Z",
  //       "2021-06-03T01:20:00Z",
  //       "2021-06-03T01:40:00Z",
  //       "2021-06-03T02:00:00Z",
  //       "2021-06-03T02:20:00Z"
  //     ],
  //     "medicalCertifications": [],
  //     "medicalSpecialities": [
  //       {
  //         "id": 71831,
  //         "name": "Pediatric Endocrinology",
  //         "description": null
  //       }
  //     ],
  //     "professionalHighlights": [],
  //     "education": [],
  //     "ratings": [],
  //     "languages": [
  //       {
  //         "id": "ta",
  //         "description": "Tamil"
  //       },
  //       {
  //         "id": "en",
  //         "description": "English"
  //       }
  //     ],
  //     "badges": [],
  //     "organizations": [
  //       {
  //         "id": 69179,
  //         "type": null,
  //         "slug": null,
  //         "name": "US American-Indian Physician COVID-19 Expert (Tamil)",
  //         "description": null,
  //         "htmlDescription": null,
  //         "logo": null,
  //         "logoFile": null
  //       }
  //     ],
  //     "online": false
  //   },
  //   {
  //     "id": 71674,
  //     "fullName": "Dr. Arunachalam Einstein, MD",
  //     "firstName": "Arunachalam",
  //     "familyName": "Einstein",
  //     "title": "",
  //     "gender": "M",
  //     "profileImage": "https://mdtok-dev-public.s3.us-east-2.amazonaws.com/20210502/7798c744-592d-4cca-8055-834a62b2b304.jpg",
  //     "city": "Everette",
  //     "region": "Washington",
  //     "countryCode": "US",
  //     "profileDescription": null,
  //     "profileShortDescription": "",
  //     "preferredLanguage": null,
  //     "slug": "arunachalameinstein",
  //     "organizationId": null,
  //     "organizationName": null,
  //     "stars": 0,
  //     "numRatings": 0,
  //     "numCompleted": 0,
  //     "costPerAppointment": 0,
  //     "currency": "USD",
  //     "userType": "DOCTOR",
  //     "staffDoctor": false,
  //     "staffDoctorRequired": true,
  //     "status": "ACTIVE",
  //     "availableAppointments": [
  //       "2021-05-13T03:40:00Z",
  //       "2021-05-14T03:00:00Z",
  //       "2021-05-14T03:20:00Z",
  //       "2021-05-14T03:40:00Z",
  //       "2021-05-15T03:00:00Z",
  //       "2021-05-15T03:20:00Z",
  //       "2021-05-15T03:40:00Z",
  //       "2021-05-16T03:00:00Z",
  //       "2021-05-16T03:20:00Z",
  //       "2021-05-16T03:40:00Z",
  //       "2021-05-18T03:00:00Z",
  //       "2021-05-18T03:20:00Z",
  //       "2021-05-18T03:40:00Z",
  //       "2021-05-19T03:00:00Z",
  //       "2021-05-19T03:20:00Z",
  //       "2021-05-19T03:40:00Z",
  //       "2021-05-20T03:00:00Z",
  //       "2021-05-20T03:20:00Z",
  //       "2021-05-20T03:40:00Z",
  //       "2021-05-21T03:00:00Z"
  //     ],
  //     "medicalCertifications": [],
  //     "medicalSpecialities": [
  //       {
  //         "id": 71690,
  //         "name": "Emergency Medicine",
  //         "description": null
  //       }
  //     ],
  //     "professionalHighlights": [],
  //     "education": [],
  //     "ratings": [],
  //     "languages": [
  //       {
  //         "id": "en",
  //         "description": "English"
  //       },
  //       {
  //         "id": "ta",
  //         "description": "Tamil"
  //       }
  //     ],
  //     "badges": [],
  //     "organizations": [
  //       {
  //         "id": 69179,
  //         "type": null,
  //         "slug": null,
  //         "name": "US American-Indian Physician COVID-19 Expert (Tamil)",
  //         "description": null,
  //         "htmlDescription": null,
  //         "logo": null,
  //         "logoFile": null
  //       }
  //     ],
  //     "online": false
  //   },
  //   {
  //     "id": 69187,
  //     "fullName": "Dr. Kalai Chellam, MBBS, MD - TN Lead",
  //     "firstName": "Kalai",
  //     "familyName": "Chellam",
  //     "title": "",
  //     "gender": "F",
  //     "profileImage": "https://mdtok-dev-public.s3.us-east-2.amazonaws.com/20210501/b40f6c2d-4126-4005-baa8-5be5a4a056d7.jpeg",
  //     "city": "Decatur",
  //     "region": "Georgia",
  //     "countryCode": "US",
  //     "profileDescription": null,
  //     "profileShortDescription": "",
  //     "preferredLanguage": null,
  //     "slug": "kalaichellam-usa-tamilnadu",
  //     "organizationId": null,
  //     "organizationName": null,
  //     "stars": 0,
  //     "numRatings": 0,
  //     "numCompleted": 0,
  //     "costPerAppointment": 0,
  //     "currency": "INR",
  //     "userType": "DOCTOR",
  //     "staffDoctor": false,
  //     "staffDoctorRequired": true,
  //     "status": "ACTIVE",
  //     "availableAppointments": [
  //       "2021-05-23T02:30:00Z",
  //       "2021-05-23T02:50:00Z",
  //       "2021-05-23T03:10:00Z",
  //       "2021-05-23T03:30:00Z",
  //       "2021-05-23T03:50:00Z",
  //       "2021-05-23T04:10:00Z",
  //       "2021-05-30T02:30:00Z",
  //       "2021-05-30T02:50:00Z",
  //       "2021-05-30T03:10:00Z",
  //       "2021-05-30T03:30:00Z",
  //       "2021-05-30T03:50:00Z",
  //       "2021-05-30T04:10:00Z",
  //       "2021-06-06T02:30:00Z",
  //       "2021-06-06T02:50:00Z",
  //       "2021-06-06T03:10:00Z",
  //       "2021-06-06T03:30:00Z",
  //       "2021-06-06T03:50:00Z",
  //       "2021-06-06T04:10:00Z"
  //     ],
  //     "medicalCertifications": [],
  //     "medicalSpecialities": [
  //       {
  //         "id": 85365,
  //         "name": "Hospital Medicine",
  //         "description": null
  //       },
  //       {
  //         "id": 85363,
  //         "name": "Internal Medicine",
  //         "description": null
  //       },
  //       {
  //         "id": 85364,
  //         "name": "Geriatric Medicine",
  //         "description": null
  //       }
  //     ],
  //     "professionalHighlights": [],
  //     "education": [],
  //     "ratings": [],
  //     "languages": [
  //       {
  //         "id": "ml",
  //         "description": "Malayalam"
  //       },
  //       {
  //         "id": "te",
  //         "description": "Telugu"
  //       },
  //       {
  //         "id": "ta",
  //         "description": "Tamil"
  //       },
  //       {
  //         "id": "en",
  //         "description": "English"
  //       }
  //     ],
  //     "badges": [],
  //     "organizations": [
  //       {
  //         "id": 69179,
  //         "type": null,
  //         "slug": null,
  //         "name": "US American-Indian Physician COVID-19 Expert (Tamil)",
  //         "description": null,
  //         "htmlDescription": null,
  //         "logo": null,
  //         "logoFile": null
  //       }
  //     ],
  //     "online": false
  //   },
  //   {
  //     "id": 69181,
  //     "fullName": "Dr. Poornema Ramasamy, MD MBA FACP",
  //     "firstName": "Poornema",
  //     "familyName": "Ramasamy",
  //     "title": "",
  //     "gender": null,
  //     "profileImage": "https://mdtok-dev-public.s3.us-east-2.amazonaws.com/20210501/7b91cd3f-73a1-46da-8b9b-6aa615187b3b.jpg",
  //     "city": "Columbia",
  //     "region": "South Carolina",
  //     "countryCode": "US",
  //     "profileDescription": null,
  //     "profileShortDescription": "",
  //     "preferredLanguage": null,
  //     "slug": "dr-poornema-ramasamy-md-mba-facp",
  //     "organizationId": null,
  //     "organizationName": null,
  //     "stars": 0,
  //     "numRatings": 0,
  //     "numCompleted": 0,
  //     "costPerAppointment": 0,
  //     "currency": "USD",
  //     "userType": "DOCTOR",
  //     "staffDoctor": false,
  //     "staffDoctorRequired": true,
  //     "status": "ACTIVE",
  //     "availableAppointments": [],
  //     "medicalCertifications": [],
  //     "medicalSpecialities": [
  //       {
  //         "id": 142859,
  //         "name": "Internal Medicine",
  //         "description": null
  //       }
  //     ],
  //     "professionalHighlights": [],
  //     "education": [],
  //     "ratings": [],
  //     "languages": [
  //       {
  //         "id": "ta",
  //         "description": "Tamil"
  //       },
  //       {
  //         "id": "en",
  //         "description": "English"
  //       }
  //     ],
  //     "badges": [],
  //     "organizations": [
  //       {
  //         "id": 69179,
  //         "type": null,
  //         "slug": null,
  //         "name": "US American-Indian Physician COVID-19 Expert (Tamil)",
  //         "description": null,
  //         "htmlDescription": null,
  //         "logo": null,
  //         "logoFile": null
  //       }
  //     ],
  //     "online": false
  //   }
  // ]
  
  ngOnInit(): void {

    this.coreServices.getDoctorlist().subscribe(resp => {
      if(resp){
        this.doctorlist = resp;
      }
    })
  
  }
 
}
