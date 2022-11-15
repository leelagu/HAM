import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:4200";

var httpLink = {
  getAllConnection: apiUrl + "/api/connection/getAllConnection",
  deleteConnectionById: apiUrl + "/api/connection/deleteConnectionById",
  getConnectionDetailById: apiUrl + "/api/connection/getConnectionDetailById",
  saveConnection: apiUrl + "/api/connection/saveConnection"
}
@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  constructor(private webApiService: WebApiService) { }

  public getAllConnection(): Observable<any> {
    return this.webApiService.get(httpLink.getAllConnection);
  }
  public deleteConnectionById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteConnectionById + '?connectionId=' + model, "");
  }
  public getConnectionDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getConnectionDetailById + '?connectionId=' + model);
  }
  public saveConnection(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveConnection, model);
  }  
}                          