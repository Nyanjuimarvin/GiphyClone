import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchdisplayComponent } from './components/searchdisplay/searchdisplay.component';
import { GifdisplayComponent } from './components/gifdisplay/gifdisplay.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'trending'},
  {path:"search",component:SearchdisplayComponent},
  {path:"trending",component:GifdisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
