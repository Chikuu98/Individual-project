import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyNsellComponent } from './buy-nsell.component';

describe('BuyNsellComponent', () => {
  let component: BuyNsellComponent;
  let fixture: ComponentFixture<BuyNsellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyNsellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyNsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
