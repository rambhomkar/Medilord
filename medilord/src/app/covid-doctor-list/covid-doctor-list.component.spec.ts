import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDoctorListComponent } from './covid-doctor-list.component';

describe('CovidDoctorListComponent', () => {
  let component: CovidDoctorListComponent;
  let fixture: ComponentFixture<CovidDoctorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidDoctorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDoctorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
