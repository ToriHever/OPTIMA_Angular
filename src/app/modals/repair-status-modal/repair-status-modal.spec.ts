import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairStatusModal } from './repair-status-modal';

describe('RepairStatusModal', () => {
  let component: RepairStatusModal;
  let fixture: ComponentFixture<RepairStatusModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepairStatusModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairStatusModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
