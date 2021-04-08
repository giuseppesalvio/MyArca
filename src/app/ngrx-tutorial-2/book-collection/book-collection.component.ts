import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../../models/book";

@Component({
  selector: "app-book-collection",
  templateUrl: "./book-collection.component.html",
})
export class BookCollectionComponent {
  @Input() books: Array<Book>;
  @Output() remove = new EventEmitter();
}
