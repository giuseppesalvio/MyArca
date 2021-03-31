import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HandleError, HttpErrorHandler } from "./http-error-handler.service";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token",
  }),
};

class People {
  id: number;
  name: string;
}

@Injectable()
export class PeopleService {
  peopleUrl = "http://localhost:3000/people"; // URL to web api
  private handleError: HandleError;

  constructor(private http: HttpClient) {}

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.peopleUrl);
  }

  //  /* GET heroes whose name contains search term */
  //   searchHeroes(term: string): Observable<People[]> {
  //     term = term.trim();
  //
  //     // Add safe, URL encoded search parameter if there is a search term
  //     const options = term ? { params: new HttpParams().set("name", term) } : {};
  //
  //     return this.http
  //       .get<People[]>(this.peopleUrl, options)
  //       .pipe(catchError(this.handleError<People[]>("searchHeroes", [])));
  //   }
  //
  //   //////// Save methods //////////
  //
  //   /** POST: add a new hero to the database */
  //   addHero(hero: People): Observable<People> {
  //     return this.http
  //       .post<People>(this.peopleUrl, hero, httpOptions)
  //       .pipe(catchError(this.handleError("addHero", hero)));
  //   }
  //
  //   /** DELETE: delete the hero from the server */
  //   deleteHero(id: number): Observable<{}> {
  //     const url = `${this.peopleUrl}/${id}`; // DELETE api/heroes/42
  //     return this.http
  //       .delete(url, httpOptions)
  //       .pipe(catchError(this.handleError("deleteHero")));
  //   }
  //
  //   /** PUT: update the hero on the server. Returns the updated hero upon success. */
  //   updateHero(hero: People): Observable<People> {
  //     httpOptions.headers = httpOptions.headers.set(
  //       "Authorization",
  //       "my-new-auth-token"
  //     );
  //
  //     return this.http
  //       .put<People>(this.peopleUrl, hero, httpOptions)
  //       .pipe(catchError(this.handleError("updateHero", hero)));
  //   }
}
