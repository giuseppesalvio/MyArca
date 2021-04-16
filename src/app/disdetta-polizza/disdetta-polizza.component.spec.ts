import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisdettaPolizzaComponent } from './disdetta-polizza.component';

describe('DisdettaPolizzaComponent', () => {
  let component: DisdettaPolizzaComponent;
  let fixture: ComponentFixture<DisdettaPolizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisdettaPolizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisdettaPolizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
