import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentstatustableComponent } from './rentstatustable.component';

describe('RentstatustableComponent', () => {
  let component: RentstatustableComponent;
  let fixture: ComponentFixture<RentstatustableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentstatustableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentstatustableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
