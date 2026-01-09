import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsModal } from './repairs-modal';

describe('RepairsModal', () => {
  let component: RepairsModal;
  let fixture: ComponentFixture<RepairsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepairsModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairsModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
