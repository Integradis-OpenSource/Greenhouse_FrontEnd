import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  constructor(htpp: HttpClient) {
    super(htpp);
  }

  setResourceEndpoint(endpoint: string) {
    this.resourceEndpoint = `/${endpoint}`;
  }
}
