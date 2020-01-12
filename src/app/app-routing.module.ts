import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './dashboard/main-nav/main-nav.component';
const routes: Routes = [
  {
    path : '',
    redirectTo: 'notesApp',
    pathMatch: 'full',
  },
  {
    path : '',
  component : MainNavComponent,
  },
  {
    path: '**',
    redirectTo: 'notesApp'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
