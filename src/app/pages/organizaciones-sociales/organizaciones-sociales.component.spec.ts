import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionesSocialesComponent } from './organizaciones-sociales.component';

describe('OrganizacionesSocialesComponent', () => {
  let component: OrganizacionesSocialesComponent;
  let fixture: ComponentFixture<OrganizacionesSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizacionesSocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacionesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
