import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableMusicComponent } from './table-music/table-music.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductMusicComponent } from './product-music/product-music.component';
@NgModule({
  declarations: [
    AppComponent,
    TableMusicComponent,
    ProductMusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
