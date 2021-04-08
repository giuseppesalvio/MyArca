import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  isExpanding = false;
  menuItems: MenuItem[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.menuItems = [
      {
        label: "Wrapping Prime",
        items: [
          {
            label: "Tabelle",
            icon: "pi pi-table",
            command: () => {
              this.router.navigate(["/tableEx"]);
            },
          },
          {
            label: "Button",
            icon: "pi pi-table",
            command: () => {
              this.router.navigate(["/buttonEx"]);
            },
          },
          {
            label: "Chiamate Service",
            icon: "pi pi-table",
            command: () => {
              this.router.navigate(["/peopleEx"]);
            },
          },
          {
            label: "Chiamate Store Semplice",
            icon: "pi pi-table",
            command: () => {
              this.router.navigate(["/storeExSemplice"]);
            },
          },
          {
            label: "Chiamate Store Completo",
            icon: "pi pi-table",
            command: () => {
              this.router.navigate(["/storeExCompleto"]);
            },
          },
          {
            label: "NgRx tutorial - counter",
            icon: "pi pi-table",
            command: () => {
              this.router.navigate(["/ngrxCounter"]);
            },
          },
          {
            label: "NgRx tutorial - books",
            icon: "pi pi-table",
            command: () => {
              this.router.navigate(["/ngrxBooks"]);
            },
          },
        ],
      },
    ];
  }

  toggleSideBar() {
    this.isExpanding = !this.isExpanding;
  }
}
