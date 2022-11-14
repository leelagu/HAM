import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddConnectionComponent } from './add-connection/add-connection.component';
import { EditConnectionComponent } from './edit-connection/edit-connection.component';
import { ViewConnectionComponent } from './view-connection/view-connection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddConnectionComponent,
    EditConnectionComponent,
    ViewConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
