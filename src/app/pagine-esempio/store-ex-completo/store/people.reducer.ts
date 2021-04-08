import { Action, createReducer, on } from "@ngrx/store";

import { People } from "../../../models/people";
import { loadPeoples, loadPeoplesSuccess } from "./people.actions";

export const peopleFeatureKey = "people";

export interface PeopleState {
  peoples: People[];
  test: string;
}

export const initialState: PeopleState = {
  peoples: [],
  test: "aaaaaa",
};

// export const reducer = createReducer(
//   initialState,
//   on(loadPeoples, (state) => ({ ...state, listaPersone: state.listaPersone }))
// );

export const peopleReducer = createReducer(
  initialState,
  on(loadPeoples, (state: PeopleState) => {
    return {
      ...state,
      peoples: [...state.peoples],
    };
  }),
  on(loadPeoplesSuccess, (state: PeopleState, x) => {
    return {
      ...state,
      peoples: [...x.peoples],
    };
  })
);

export function reducer(state: PeopleState | undefined, action: Action): any {
  return peopleReducer(state, action);
}
