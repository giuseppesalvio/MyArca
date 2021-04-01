import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HandleError, HttpErrorHandler } from "./http-error-handler.service";
import { Observable } from "rxjs";
import { People } from "../domain/people";
import { catchError } from "rxjs/operators";

@Injectable()
export class PeopleService {
  peopleUrl = "http://localhost:3000/people"; // URL to web api
  private handleError: HandleError;

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
