import { Action, createReducer, on } from "@ngrx/store";

import { People } from "../../../models/people";
import {
  loadPeoples,
  loadPeoplesFailure,
  loadPeoplesSuccess,
} from "./people.actions";

export const peopleFeatureKey = "people";

export interface PeopleState {
  peoples: People[];
  operazione: boolean;
  error: boolean;
}

export const initialState: PeopleState = {
  peoples: [],
  operazione: false,
  error: false,
};

// export const reducer = createReducer(
//   initialState,
//   on(loadPeoples, (state) => ({ ...state, listaPersone: state.listaPersone }))
// );

export const peopleReducer = createReducer(
  initialState,
  on(loadPeoples, (state) => {
    return {
      ...state,
      peoples: [...state.peoples],
      operazione: null,
      error: false,
    };
  }),
  on(loadPeoplesSuccess, (state, action) => {
    return {
      ...state,
      peoples: [...action["peoples"]],
      operazione: true,
      error: false,
    };
  }),
  on(loadPeoplesFailure, (state, action) => {
    return {
      ...state,
      peoples: [...state.peoples],
      operazione: null,
      error: true,
    };
  })
);

export function reducer(state: PeopleState | undefined, action: Action): any {
  return peopleReducer(state, action);
}
