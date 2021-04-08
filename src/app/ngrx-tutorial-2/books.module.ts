import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { booksFeatureKey, booksReducer } from "./store/books.reducer";
import {
  collectionFeatureKey,
  collectionReducer,
} from "./store/collection.reducer";
import { BookListComponent } from "./book-list/book-list.component";
import { GoogleBooksService } from "./books.service";
import { BookCollectionComponent } from "./book-collection/book-collection.component";
import { BookMainComponent } from "./book/book-main.component";

@NgModule({
  declarations: [BookListComponent, BookCollectionComponent, BookMainComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(booksFeatureKey, booksReducer),
    StoreModule.forFeature(collectionFeatureKey, collectionReducer),
  ],
  exports: [],
  providers: [GoogleBooksService],
})
export class BooksModule {}
