import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../../models/book";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
})
export class BookListComponent {
  @Input() books: Array<Book>;
  @Output() add = new EventEmitter();
}
