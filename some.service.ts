import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { SomeModelInterface } from './someModelInterface';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';

// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
//     observe: 'response',
//     // domain/endpoint?key=value&key2=value2
//     params : new HttpParams().append('key','value').append('key2','value2') 
// };

export class SomeService {
    private apiUrl = './sample.json';  // URL to web api = domain/endpoint



    constructor(private http: HttpClient) { }

    // Normal GET
    // getData(): Observable<SomeModelInterface[]> {
    //     return this.http.get<SomeModelInterface[]>(this.apiUrl)
    //         .catch(this.errorHandler);
    // }

    // errorHandler(error: HttpErrorResponse) {
    //     return Observable.throw(error.message || "Server Error");
    // }


    // Advance GET
    // getData(): Observable<SomeModelInterface[]> {
    //     return this.http.get<SomeModelInterface[]>(this.apiUrl, httpOptions)
            // .pipe(
            //     retry(3),
            //     tap(dataReceived => {
            //         const outcome = dataReceived ? `fetched` : `did not find`;
            //         console.log(`${outcome}`);
            //     }),
            //     map(response => response.body),
            //     catchError(this.handleError)
            // )
    // }

    // handleError(error: HttpErrorResponse) {
    //     return throwError(error.message || "Server Error");
    // }


    // With Interceptor
    getData(): Observable<SomeModelInterface[]> {
        return this.http.get<SomeModelInterface[]>(this.apiUrl)
    }
}
