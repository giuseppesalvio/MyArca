import { Action, createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "../action/counter.actions";

export const counterFeatureKey = "counter";

export const initialState = 0;

export const reducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
