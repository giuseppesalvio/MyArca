import { Action, createReducer, on } from "@ngrx/store";
import { Book } from "src/app/models/book";
import { retrievedBookList } from "./books.actions";

export const booksFeatureKey = "books";

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, x) => [...x.Book])
);
