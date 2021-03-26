import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExComponent } from './table-ex.component';

describe('TableExComponent', () => {
  let component: TableExComponent;
  let fixture: ComponentFixture<TableExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
