import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { LoadingService } from '../services/loading.service';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { finalize } from "rxjs/operators";
import { MessageService } from 'primeng/api';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(public loadingService: LoadingService, private messageService: MessageService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loadingService.show();
    const started = Date.now();

    /*
    // uncomment if using token bearer
    const token: string = localStorage.getItem('token');
    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }
    */

    /*
    // uncomment if  add content type
    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }
    */

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
          const statusCode = event['body'].code;
          switch (statusCode) {
            case 400:
              this.messageService.add({ severity: 'error', summary: 'Failed', detail: `${event['body'].status}`, life: 3000 });
              break;

            default:
              break;
          }
        }

        return event;
      }),

      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason: error && error.error && error.error.reason ? error.error.reason : '',
          status: error.status
        };
        return throwError(error);
      }), finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${request.method} "${request.urlWithParams}"  in ${elapsed} ms.`;
        console.log(msg);
        this.loadingService.hide()
      }));
  }
}