import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-edit-connection',
  templateUrl: './edit-connection.component.html',
  styleUrls: ['./edit-connection.component.scss']
})
export class EditConnectionComponent implements OnInit {
  editConnectionForm: connectionForm = new connectionForm();

  @ViewChild("connectionForm")
  connectionForm!: NgForm;

  isSubmitted: boolean = false;
  connectionId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.connectionId = this.route.snapshot.params['connectionId'];
    this.getConnectionDetailById();
  }
  getConnectionDetailById() {
    this.httpProvider.getConnectionDetailById(this.connectionId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editConnectionForm.Id = resultData.id;
          this.editConnectionForm.FirstName = resultData.firstName;
          this.editConnectionForm.LastName = resultData.lastName;
          this.editConnectionForm.Email = resultData.email;
          this.editConnectionForm.Address = resultData.address;
          this.editConnectionForm.Phone = resultData.phone;
        }
      }
    },
      (error: any) => { });
  }

  EditConnection(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveConnection(this.editConnectionForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
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
  Id: number = 0;
  FirstName: string = "";
  LastName: string = "";
  Email: string = "";
  Address: string = "";
  Phone: string = "";
}