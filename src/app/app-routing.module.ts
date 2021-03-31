import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableExComponent } from "./pagine-esempio/table-ex/table-ex.component";
import { ButtonExComponent } from "./pagine-esempio/button-ex/button-ex.component";
import { HttpCallExComponent } from "./pagine-esempio/http-call-ex/http-call-ex.component";

const routes: Routes = [
  { path: "tableEx", component: TableExComponent },
  { path: "buttonEx", component: ButtonExComponent },
  { path: "peopleEx", component: HttpCallExComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
