import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { Business } from '../model/business';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService extends BaseService<Business> {

  constructor(htpp: HttpClient) {
    super(htpp);
  }

  setResourceEndpoint(endpoint: string) {
    this.resourceEndpoint = `/${endpoint}`;
  }
}
