import { createAction, props } from "@ngrx/store";

export const loadCounters = createAction("[Counter] Load Counters");

export const loadCountersSuccess = createAction(
  "[Counter] Load Counters Success",
  props<{ data: any }>()
);

export const loadCountersFailure = createAction(
  "[Counter] Load Counters Failure",
  props<{ error: any }>()
);
export const increment = createAction("[Counter Component] Increment");
export const decrement = createAction("[Counter Component] Decrement");
export const reset = createAction("[Counter Component] Reset");
