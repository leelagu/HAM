import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConnectionComponent } from './add-connection/add-connection.component';
import { EditConnectionComponent } from './edit-connection/edit-connection.component';
import { HomeComponent } from './home/home.component';
import { ViewConnectionComponent } from './view-connection/view-connection.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'ViewConnection/:connectionId', component: ViewConnectionComponent },
  { path: 'AddConnection', component: AddConnectionComponent },
  { path: 'EditConnection/:connectionId', component: EditConnectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
