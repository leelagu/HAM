
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';



var apiUrl = " http://localhost:4200/";

//var apiUrl = "http://192.168.10.10:105";



@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private http : HttpClient) { }

  public getAllConnection(): Observable<any> {
    return this.http.get('https://hamapplication-default-rtdb.firebaseio.com/connections.json');
  }

  public deleteConnectionById(model: any): Observable<any> {
    return this.http.post('https://hamapplication-default-rtdb.firebaseio.com/connections/'+'conectionId'+'.json', "");
  }

  public getConnectionDetailById(model: any): Observable<any> {
    return this.http.get('https://hamapplication-default-rtdb.firebaseio.com/connections/'+'conectionId'+'.json');
  }

  public saveConnection(model: any): Observable<any> {
    return this.http.post('https://hamapplication-default-rtdb.firebaseio.com/connections.json', model);
  }
  
}

/*


import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';
import { Connection } from "src/app/model/connections";
import { Subject, throwError } from "rxjs";


@Injectable({providedIn: "root"})
export class ConnectionService{
    error = new Subject<string>();
    constructor(private http: HttpClient){

    }
    //create  a product in database
    createConnection(connections: {firstname: string, lastname : string, email: string, address : string, phone: string}){
        console.log(connections);
        const headers = new HttpHeaders({'myHeader':'HAM'});
        this.http.post<{name: string}>('https://hamapplication-default-rtdb.firebaseio.com/connections.json', connections,
        {headers:headers})
        .subscribe((res)=>{
        console.log(res);
        },(err) => {
            this.error.next(err.message);
        });

    }

    //fetch product from database
    fetchConnection(){
        return this.http.get<{[key : string]: Connection}>('https://hamapplication-default-rtdb.firebaseio.com/connections.json')
        .pipe(map((res) =>{
            const connections = [];
            for(const key in res){
                if(res.hasOwnProperty(key)){
                connections.push({...res[key], id: key})
                }
        }
        return connections;
        }), catchError((err) => {
            //write the logic for logging error
            return throwError(err)

        }))

    }
    //delete a product from database
    deleteConnection(id: string){
        this.http.delete('https://hamapplication-default-rtdb.firebaseio.com/connections/'+id+'.json')
        .subscribe();

    }

    deleteAllConnections(){
        this.http.delete('https://hamapplication-default-rtdb.firebaseio.com/connections.json')
        .subscribe();
    }

    updateConnection(id: string, value: Connection){
        this.http.put('https://hamapplication-default-rtdb.firebaseio.com/connections/'+id+'.json',value)
        .subscribe();
    }

}
*/
