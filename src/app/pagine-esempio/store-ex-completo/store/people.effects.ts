import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PeopleService } from "../../../services/people.service";
import { catchError, map, mergeMap } from "rxjs/operators";
import {
  loadPeoples,
  loadPeoplesFailure,
  loadPeoplesSuccess,
} from "./people.actions";

@Injectable()
export class PeopleEffects {
  constructor(
    private actions$: Actions,
    private peopleService: PeopleService
  ) {}

  loadPeoples$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPeoples.type),
      mergeMap(() =>
        this.peopleService.getPeople().pipe(
          map((peoples) => ({
            type: loadPeoplesSuccess.type,
            peoples: peoples,
          })),
          catchError(() => ofType(loadPeoplesFailure.type))
        )
      )
    );
  });
}
