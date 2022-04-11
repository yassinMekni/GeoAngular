import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './app/list/list.component';
import { MapsComponent } from './app/maps/maps.component';


const routes: Routes = [
  {path: '/list' , component: ListComponent},
  {path: '/maps' , component: MapsComponent}
  
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

