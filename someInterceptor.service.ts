import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response',
    // domain/endpoint?key=value&key2=value2
    params: new HttpParams().append('key', 'value').append('key2', 'value2')
};

export class SomeInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modReqClone = req.clone(httpOptions)
        return next.handle(modReqClone)
            .pipe(
                retry(3),
                tap(dataReceived => {
                    const outcome = dataReceived ? `fetched` : `did not find`;
                    console.log(`${outcome}`);
                }),
                map(response => response.body),
                catchError(this.handleError)
            );
    }

    handleError(error: HttpErrorResponse) {
        console.log('Error');
        return throwError(error.message || "Server Error");
    }
}