import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableExComponent } from "./pagine-esempio/table-ex/table-ex.component";
import { ButtonExComponent } from "./pagine-esempio/button-ex/button-ex.component";
import { HttpCallExComponent } from "./pagine-esempio/http-call-ex/http-call-ex.component";
import { StoreExSempliceComponent } from "./pagine-esempio/store-ex-semplice/store-ex-semplice.component";
import { StoreExCompletoComponent } from "./pagine-esempio/store-ex-completo/store-ex-completo.component";
import { CounterComponent } from "./ngrx-tutorial-1/counter-component/counter.component";
import { BookMainComponent } from "./ngrx-tutorial-2/book/book-main.component";

const routes: Routes = [
  { path: "tableEx", component: TableExComponent },
  { path: "buttonEx", component: ButtonExComponent },
  { path: "peopleEx", component: HttpCallExComponent },
  { path: "storeExSemplice", component: StoreExSempliceComponent },
  { path: "storeExCompleto", component: StoreExCompletoComponent },
  { path: "ngrxCounter", component: CounterComponent },
  { path: "ngrxBooks", component: BookMainComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
