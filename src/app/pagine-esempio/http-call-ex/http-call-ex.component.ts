import { Component, OnInit } from "@angular/core";
import { PeopleService } from "../../services/people.service";

class People {
  id: number;
  name: string;
}

@Component({
  selector: "app-http-call-ex",
  templateUrl: "./http-call-ex.component.html",
  styleUrls: ["./http-call-ex.component.css"],
  providers: [PeopleService],
})
export class HttpCallExComponent implements OnInit {
  peoples: People[];
  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.peopleService.getPeople().subscribe(
      (val) => {
        console.log("PUT call successful value returned in body", val);
        this.peoples = val;
      },
      (response) => {
        console.log("PUT call in error", response);
      },
      () => {
        console.log("The PUT observable is now completed.");
      }
    );
  }
}
