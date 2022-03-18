import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

import * as ROUTES from '../configs/apiRoutes';
import { StoreService } from './store.service';
import { NotificationService } from './notification.service';
import { NOTIFICATION_TYPES } from '../configs/notificationTypes';
import { notificationMessages } from '../configs/notificationMessages';
import { Item, ServerResponse } from '../types';

import { DATA } from '../../mocks/data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private store: StoreService,
    private notification: NotificationService,
  ) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getList(): Observable<void> {
    this.store.setList(DATA);
    return of();

    // return this.http.get<ServerResponse<Item[]>>(ROUTES.API_URL).pipe(
    //   map(({ data }) => this.store.setList(data)),
    //   catchError(this.handleError<void>(notificationMessages.serverError, 'getList')),
    // );
  }

  private handleError<T>(message: string, operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.notification.add(message, NOTIFICATION_TYPES.ERROR);
      this.log(`${operation} failed: ${error.message}`, 'error');

      return of(result as T);
    };
  }

  private log(message: string, type = 'log'): void {
    (console as Record<string, any>)[type](`ApiService: ${message}`);
  }
}
