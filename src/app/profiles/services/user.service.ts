import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {
  private searchTerm$ = new Subject<string>();

  constructor(http: HttpClient) {
    super(http);
    //this.basePath = "https://my-json-server.typicode.com/CarloLSG/GreenhouseFakeAPI1"
    this.resourceEndpoint = "/users";
  }

  setSearchTerm(term: string) {
    this.searchTerm$.next(term);
  }

  getSearchTerm(): Observable<string> {
    return this.searchTerm$.asObservable();
  }
}
