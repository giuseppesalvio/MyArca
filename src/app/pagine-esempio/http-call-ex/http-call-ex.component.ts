import { Component, OnInit } from "@angular/core";
import { PeopleService } from "../../services/people.service";
import { People } from "../../domain/people";

@Component({
  selector: "app-http-call-ex",
  templateUrl: "./http-call-ex.component.html",
  styleUrls: ["./http-call-ex.component.css"],
  providers: [PeopleService],
})
export class HttpCallExComponent implements OnInit {
  peoples: People[];
  peoplesSearchById: People;
  peoplePost: People = {
    id: null,
    name: "",
  };
  value1: number;
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

  searchPeople(id: number): void {
    this.peopleService.getPeopleById(id).subscribe(
      (val) => {
        console.log("PUT call successful value returned in body", val);
        this.peoplesSearchById = val;
      },
      (response) => {
        console.log("PUT call in error", response);
      },
      () => {
        console.log("The PUT observable is now completed.");
      }
    );
  }

  postPeople(peoplePost: People): void {
    this.peopleService.postPeople(peoplePost).subscribe(
      (val) => {
        console.log("PUT call successful value returned in body", val);
        this.peoplesSearchById = val;
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
