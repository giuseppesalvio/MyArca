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
  peoplePut: People = {
    id: null,
    name: "",
  };
  name: string;
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

  postPeople(name: string): void {
    const temp: People = { name: name };
    this.peopleService.postPeople(temp).subscribe(
      (val) => {
        console.log("POST call successful value returned in body", val);
      },
      (response) => {
        console.log("POST call in error", response);
      },
      () => {
        this.getPeople();
        console.log("The POST observable is now completed.");
      }
    );
  }
}
