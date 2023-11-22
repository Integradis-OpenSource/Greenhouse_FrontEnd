import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Employee } from '../../profiles/model/employee';
import {TokenStorageService} from "./tokenStorage.service";



export class BaseService<T> {
  // basePath: string = 'https://my-json-server.typicode.com/Integradis-OpenSource/Greenhouse';
  // basePath: string = 'http://localhost:3000/api/v1';
  basePath: string = 'https://greenhouse.zeabur.app/api/v1';
  //basePath: string = 'http://localhost:8080/api/v1';
  resourceEndpoint: string = '/resources';
  resourceModifier: string = '';


  constructor(private http: HttpClient, private tokenService: TokenStorageService) {}

  handleError(error: HttpErrorResponse) {
    // Default error handling
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something happened with the request, please try again later'));
  }

  // Create Resource
  create(item: any): Observable<T> {
    const httpOptions = this.getHttpOptions();
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Delete Resource
  delete(id: any) {
    const httpOptions = this.getHttpOptions();
    return this.http.delete(`${this.resourcePath()}/${id}`, httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Update Resource
  update(id: any, item: any): Observable<T> {
    const httpOptions = this.getHttpOptions();
    return this.http.put<T>(`${this.resourcePath()}/${id}`, JSON.stringify(item), httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Get Resource By Id
  getById(id: any): Observable<T> {
    const httpOptions = this.getHttpOptions();
    return this.http.get<T>(`${this.resourcePath()}${id}`, httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Get All Resources
  getAll(): Observable<T> {
    //console.log("This HttpOptions:", this.httpOptions);
    const httpOptions = this.getHttpOptions();
    console.log("This HttpOptions after get:", httpOptions);
    return this.http.get<T>(this.resourcePath(), httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getList(): Observable<T[]> {
      //console.log("This HttpOptions:", this.httpOptions);
      const httpOptions = this.getHttpOptions();
      console.log("This HttpOptions after get:", httpOptions);
    return this.http.get<T[]>(this.resourcePath(), httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getEmployeesByCompany(companyId: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.resourcePath()}?company_id=${companyId}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  patch(id: any): Observable<T> {
    const httpOptions = this.getHttpOptions();
    return this.http.post<T>(`${this.basePath}${id}/${this.resourceEndpoint}`, httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  post(id: any) : Observable<T> {
    const httpOptions = this.getHttpOptions();
    return this.http.patch<T>(`${this.resourcePath()}/${id}/${this.resourceModifier}`, httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  private resourcePath(): string {
    return `${this.basePath}${this.resourceEndpoint}`;
  }

  private getHttpOptions():{headers: HttpHeaders}{
    const token = this.tokenService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return {headers: headers};
  }
}
