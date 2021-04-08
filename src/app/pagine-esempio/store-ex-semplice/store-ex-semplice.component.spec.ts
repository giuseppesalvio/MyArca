import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StoreExSempliceComponent } from "./store-ex-semplice.component";

describe("StoreExComponent", () => {
  let component: StoreExSempliceComponent;
  let fixture: ComponentFixture<StoreExSempliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreExSempliceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreExSempliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
