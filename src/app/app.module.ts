import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/appRouting';
import { AppComponent } from './app.component';
import { NevbarComponent } from './nevbar/nevbar.component';
import { MapsComponent } from './maps/maps.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

import { ErreurComponent } from './erreur/erreur.component';
import { ContinentsComponent } from './continents/continents.component';





@NgModule({
  declarations: [
    AppComponent,
    NevbarComponent,
    MapsComponent,
    DetailComponent,
    ListComponent,
    
    ErreurComponent,
         ContinentsComponent
  ],
  imports: [
    BrowserModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
