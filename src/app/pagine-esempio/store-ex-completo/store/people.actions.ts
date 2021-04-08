import { createAction, props } from "@ngrx/store";
import { People } from "../../../models/people";

export const loadPeoples = createAction("[People] Load Peoples");

export const loadPeoplesSuccess = createAction(
  "[People] Load Peoples Success",
  // props<{ data: any }>()
  props<{ peoples: Array<People> }>()
);

export const loadPeoplesFailure = createAction(
  "[People] Load Peoples Failure",
  props<{ error: any }>()
);
