import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PeopleService } from "../../../services/people.service";
import { catchError, map, mergeMap } from "rxjs/operators";
import { EMPTY, of } from "rxjs";

@Injectable()
export class PeopleEffects {
  constructor(
    private actions$: Actions,
    private peopleService: PeopleService
  ) {}

  loadPeoples$ = createEffect(() => {
    debugger;
    return this.actions$.pipe(
      ofType("[People] Load Peoples"),
      mergeMap(() =>
        this.peopleService.getPeople().pipe(
          map((peoples) => ({
            type: "[People] Load Peoples Success",
            peoples: peoples,
          })),
          // catchError(() => EMPTY)
          catchError((error) => ofType("[People] Load Peoples Failure"))
        )
      )
    );
  });
}
