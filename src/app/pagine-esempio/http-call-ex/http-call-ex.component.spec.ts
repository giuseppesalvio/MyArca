import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpCallExComponent } from "./http-call-ex.component";

describe("HttpCallExComponent", () => {
  let component: HttpCallExComponent;
  let fixture: ComponentFixture<HttpCallExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpCallExComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCallExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
