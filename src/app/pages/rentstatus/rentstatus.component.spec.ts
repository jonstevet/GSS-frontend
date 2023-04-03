import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentstatusComponent } from './rentstatus.component';

describe('RentstatusComponent', () => {
  let component: RentstatusComponent;
  let fixture: ComponentFixture<RentstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
