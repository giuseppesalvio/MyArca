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
import { CardModule } from "primeng/card";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { PanelModule } from "primeng/panel";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { CustomerModule } from "./customer/customer.module";
import { StoreExSempliceComponent } from "./pagine-esempio/store-ex-semplice/store-ex-semplice.component";
import { PeopleService } from "./services/people.service";
import { CounterModule } from "./ngrx-tutorial-1/counter.module";
import { BooksModule } from "./ngrx-tutorial-2/books.module";
import { StoreExCompletoModule } from "./pagine-esempio/store-ex-completo/store-ex-completo.module";
import { DisdettaPolizzaComponent } from "./disdetta-polizza/disdetta-polizza.component";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { ToastModule } from "primeng/toast";
import { FileUploadModule } from "primeng/fileupload";
import { AccordionModule } from "primeng/accordion";

@NgModule({
  declarations: [
    AppComponent,
    TableExComponent,
    ButtonExComponent,
    HttpCallExComponent,
    StoreExSempliceComponent,
    DisdettaPolizzaComponent,
  ],
  imports: [
    AccordionModule,
    FileUploadModule,
    ToastModule,
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
    CardModule,
    ScrollPanelModule,
    PanelModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CustomerModule,
    CounterModule,
    BooksModule,
    StoreExCompletoModule,
    BrowserModule,
    PdfViewerModule,
  ],
  providers: [
    ConfirmationService,
    ProductService,
    MessageService,
    PeopleService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
