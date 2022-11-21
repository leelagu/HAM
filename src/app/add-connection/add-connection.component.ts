
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-add-connection',
  templateUrl: './add-connection.component.html',
  styleUrls: ['./add-connection.component.scss']
})
export class AddConnectionComponent implements OnInit {
  addConnectionForm: connectionForm = new connectionForm();

  @ViewChild("connectionForm")
  connectionForm!: NgForm;
  isSubmitted: boolean = false;
  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {  }

  AddConnection(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveConnection(this.addConnectionForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/Home']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
    }
  }
}

export class connectionForm {
  FirstName: string = "";
  LastName: string = "";
  Email: string = "";
  Address: string = "";
  Phone: string = "";
}






/*
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ConnectionService } from 'src/app/Service/http-provider.service';
import { Connection } from 'src/app/model/connections';



@Component({
  selector: 'app-root',
  templateUrl: './add-connection.component.html',
  styleUrls: ['./add-connection.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'HAMApplication';
  allConnections : Connection[] = [];
  isFetching: boolean = false;
  @ViewChild('connectionsForm') form : NgForm;
  editMode : boolean = false;
  currentConnectionId : string;
  errorMessage : string = null;
  errorSub : Subscription

  constructor(private http: HttpClient, private connectionService: ConnectionService){

  }

  ngOnInit() {
    this.fetchConnections();
    this.errorSub = this.connectionService.error.subscribe((message) => {
      this.errorMessage = message;
    })
  }

  onConnectionsFetch(){
    this.fetchConnections();
  }

  AddConnection(connections: {firstname: string, lastname : string, email: string, address : string, phone: string}){
    if(!this.editMode)
        this.connectionService.createConnection(connections);
    else
        this.connectionService.updateConnection(this.currentConnectionId, connections)
    
  }


  private fetchConnections(){
    this.isFetching = true;
    this.connectionsService.fetchConnection().subscribe((connections) => {
      this.allConnections = connections;
      this.isFetching = false;
    }, (err) => {
      this.errorMessage = err.message;

    })
    
  }

  onDeleteConnection(id: string){
    this.connectionService.deleteConnection(id);
  }

  onDeleteAllConnections(id: string){
    this.connectionService.deleteAllProducts();
  }

  onEditClicked(id: string){
    this.currentConnectionId = id;
    //update based on id
    let currentConnection = this.allConnections.find((p) => {return p.id == id});
    console.log(currentConnection);
   
    //populate the form with id details
    this.form.setValue({
      firstname : currentConnection.firstname,
      lastname : currentConnection.lastname,
      email : currentConnection.email,
      address : currentConnection.address,
      phone : currentConnection.phone
    });
    //change the button value to updat button
    this.editMode = true;

  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
    
  }
}
*/
