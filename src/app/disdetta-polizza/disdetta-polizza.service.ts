import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class DisdettaPolizzaService {
    private url = 'https://cogitoapi.finconsgroup.com/cogito/v1/annotation/annotate/Disdetta.json'

    // httpOptions = {
    //     headers: new HttpHeaders({
    //         // Authorization: "Basic U3VwZXJBZG1pbjpWZXJvbmFfMDE=",
    //         // Authorization: "Basic " + btoa("SuperAdmin:Verona_01"),
    //         // 'Access-Control-Allow-Origin': '*',
    //         // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    //         // 'Content-type': 'text/plain; charset="utf-8"',
    //         // 'X-Requested-With': 'XMLHttpRequest',
    //         // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    //     }),
    // }

    constructor(private http: HttpClient) {}

    postFileCogito(file: File): Observable<any> {
        return this.http.post<File>(this.url, file)
    }

    get(): Observable<any> {
        return this.http.get<any>('https://cogitoapi.finconsgroup.com/cogito/v1/annotation/cartridges.xml')
    }

    // setheader() {
    //     const headers = new HttpHeaders()
    //
    //     headers.append('Access-Control-Allow-Credentials', 'true')
    //     headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    //     headers.append('Access-Control-Allow-Origin', '*')
    //     headers.append('X-Requested-With', 'XMLHttpRequest')
    //     headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    //     headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    //     return headers
    // }
}
