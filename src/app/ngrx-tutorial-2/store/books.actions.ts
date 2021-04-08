import { createAction, props } from "@ngrx/store";

export const loadBookss = createAction("[Books] Load Bookss");

export const loadBookssSuccess = createAction(
  "[Books] Load Bookss Success",
  props<{ data: any }>()
);

export const loadBookssFailure = createAction(
  "[Books] Load Bookss Failure",
  props<{ error: any }>()
);

export const addBook = createAction(
  "[Book List] Add Book",
  props<{ bookId }>()
);

export const removeBook = createAction(
  "[Book Collection] Remove Book",
  props<{ bookId }>()
);

export const retrievedBookList = createAction(
  "[Book List/API] Retrieve Books Success",
  props<{ Book }>()
);
