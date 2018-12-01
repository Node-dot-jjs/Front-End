import { Injectable } from '@angular/core';
import { ClientLocation } from './location';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getLocation(): Observable<ClientLocation[]> {
    return of()
  }

  constructor() { }
}
