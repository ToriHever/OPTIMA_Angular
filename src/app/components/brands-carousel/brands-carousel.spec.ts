import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsCarousel } from './brands-carousel';

describe('BrandsCarousel', () => {
  let component: BrandsCarousel;
  let fixture: ComponentFixture<BrandsCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
