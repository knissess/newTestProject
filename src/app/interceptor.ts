import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    return of(new HttpResponse({ status: 200, body: [1, 2, 3] }));
  }
}
