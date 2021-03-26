import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableExComponent } from "./table-ex/table-ex.component";

const routes: Routes = [{ path: "tableEx", component: TableExComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
