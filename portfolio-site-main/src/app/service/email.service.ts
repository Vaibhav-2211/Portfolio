import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = '';
  constructor(private http: HttpClient) {
    this.apiUrl = environment.API_URL;
  }

  sendEmail(data: any): Observable<any> {
    // We send payload directly to FormSubmit, making the form functional right away.
    // Ensure we handle FormSubmit's required fields.
    const payload = {
      name: data.name,
      email: data.email,
      message: data.message,
      _subject: 'New Message from Portfolio!',
      _captcha: false
    };

    return this.http.post<any>(`https://formsubmit.co/ajax/vaibhavkhandelwal.it27@gmail.com`, payload)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
