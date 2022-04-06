import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtCertificatesComponent } from './art-certificates.component';

describe('ArtCertificatesComponent', () => {
  let component: ArtCertificatesComponent;
  let fixture: ComponentFixture<ArtCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtCertificatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
