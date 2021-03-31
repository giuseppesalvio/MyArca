import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputNumberModule } from "primeng/inputnumber";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { RadioButtonModule } from "primeng/radiobutton";
import { RatingModule } from "primeng/rating";
import { ToolbarModule } from "primeng/toolbar";
import { ConfirmationService, MessageService } from "primeng/api";

import { AppComponent } from "./app.component";
import { DropdownModule } from "primeng/dropdown";
import { MenuModule } from "primeng/menu";
import { AppRoutingModule } from "./app-routing.module";
import { TableExComponent } from "./pagine-esempio/table-ex/table-ex.component";
import { ProductService } from "./services/product.service";
import { ButtonExComponent } from "./pagine-esempio/button-ex/button-ex.component";
import { HttpCallExComponent } from "./pagine-esempio/http-call-ex/http-call-ex.component";

@NgModule({
  declarations: [
    AppComponent,
    TableExComponent,
    ButtonExComponent,
    HttpCallExComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    RatingModule,
    InputNumberModule,
    InputTextareaModule,
    RadioButtonModule,
    ButtonModule,
    DropdownModule,
    MenuModule,
    AppRoutingModule,
  ],
  providers: [ConfirmationService, ProductService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
