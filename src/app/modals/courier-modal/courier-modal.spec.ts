import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierModal } from './courier-modal';

describe('CourierModal', () => {
  let component: CourierModal;
  let fixture: ComponentFixture<CourierModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourierModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
