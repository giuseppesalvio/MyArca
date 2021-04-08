import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StoreExCompletoComponent } from "./store-ex-completo.component";

describe("StoreExSempliceComponent", () => {
  let component: StoreExCompletoComponent;
  let fixture: ComponentFixture<StoreExCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreExCompletoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreExCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
