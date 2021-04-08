import { Component, OnInit } from "@angular/core";
import { selectBookCollection, selectBooks } from "../store/books.selectors";
import { select, Store } from "@ngrx/store";
import { addBook, removeBook, retrievedBookList } from "../store/books.actions";
import { GoogleBooksService } from "../books.service";

@Component({
  selector: "app-book-main",
  templateUrl: "./book-main.component.html",
})
export class BookMainComponent implements OnInit {
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }
}
