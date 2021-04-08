import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { People } from "../../models/people";
import { PeopleState } from "./store/people.reducer";
import { selectPeoples } from "./store/people.selectors";
import { loadPeoples } from "./store/people.actions";

@Component({
  selector: "app-store-ex-semplice",
  templateUrl: "./store-ex-completo.component.html",
  styleUrls: ["./store-ex-completo.component.css"],
})
export class StoreExCompletoComponent implements OnInit {
  peoples$: Observable<People[]>;

  constructor(private store: Store<PeopleState>) {
    this.peoples$ = this.store.pipe(select(selectPeoples));
  }

  ngOnInit(): void {
    this.store.dispatch(loadPeoples());
  }
}
