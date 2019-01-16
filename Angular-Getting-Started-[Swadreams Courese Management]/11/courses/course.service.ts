import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ICourse } from "./course";

@Injectable({
    providedIn: 'root'
})

export class CourseService {    
    private courseUrl = 'api/courses/courses.json';

    constructor (private http: HttpClient) {
        
    }

    getProducts(): Observable<ICourse[]> {
        return this.http.get<ICourse[]>(this.courseUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';

        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred : $(err.message)`;
        } else {
            errorMessage = `Server returned code : $(err.status), error message is : ${err.message}`;
        }

        console.error(errorMessage);
        return throwError(errorMessage);
    }
}