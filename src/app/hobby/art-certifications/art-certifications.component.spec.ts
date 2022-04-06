import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtCertificationsComponent } from './art-certifications.component';

describe('ArtCertificationsComponent', () => {
  let component: ArtCertificationsComponent;
  let fixture: ComponentFixture<ArtCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtCertificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
