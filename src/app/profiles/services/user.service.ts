import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {AuthService} from "../../shared/services/auth.service";
import {TokenStorageService} from "../../shared/services/tokenStorage.service";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {
  private searchTerm$ = new Subject<string>(); // Subject para el término de búsqueda

  constructor(http: HttpClient, tokenStorageService: TokenStorageService) {
    super(http, tokenStorageService);
    this.basePath = "https://my-json-server.typicode.com/CarloLSG/GreenhouseFakeAPI1"
    this.resourceEndpoint = "/users";
  }

  // Método para establecer el término de búsqueda
  setSearchTerm(term: string) {
    this.searchTerm$.next(term);
  }

  // Observable para escuchar cambios en el término de búsqueda
  getSearchTerm(): Observable<string> {
    return this.searchTerm$.asObservable();
  }
}
