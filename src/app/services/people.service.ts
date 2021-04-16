import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { People } from "../models/people";

@Injectable()
export class PeopleService {
  peopleUrl = "http://localhost:3000/people";

  constructor(private http: HttpClient) {}

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.peopleUrl);
  }

  getPeopleById(id: number): Observable<People> {
    return this.http.get<People>(this.peopleUrl + "/" + id);
  }

  postPeople(people: People): Observable<People> {
    return this.http.post<People>(this.peopleUrl, people);
  }
}
