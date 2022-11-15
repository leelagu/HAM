import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';
import { WebApiService } from '../Service/web-api.service';

@Component({
  selector: 'app-view-connection',
  templateUrl: './view-connection.component.html',
  styleUrls: ['./view-connection.component.scss']
})
export class ViewConnectionComponent implements OnInit {

  connectionId: any;
  connectionDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.connectionId = this.route.snapshot.params['connectionId'];      
    this.getConnectionDetailById();
  }

  getConnectionDetailById() {       
    this.httpProvider.getConnectionDetailById(this.connectionId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.connectionDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}