import { createFeatureSelector, createSelector } from "@ngrx/store";
import { peopleFeatureKey, PeopleState } from "./people.reducer";

export const selectPeopleState = createFeatureSelector<PeopleState>(
  peopleFeatureKey
);

export const selectPeoples = createSelector(
  selectPeopleState,
  (state: PeopleState) => state.peoples
);
