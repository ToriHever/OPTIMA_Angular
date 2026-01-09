import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateModal } from './certificate-modal';

describe('CertificateModal', () => {
  let component: CertificateModal;
  let fixture: ComponentFixture<CertificateModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
