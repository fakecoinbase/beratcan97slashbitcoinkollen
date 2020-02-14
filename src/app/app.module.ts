import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BtcComponent } from './components/coinOverview/btc/btc.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './components/start/start.component';
import { NavbarComponent } from './components/viewComponentParts/navbar/navbar.component';
import { FooterComponent } from './components/viewComponentParts/footer/footer.component';

import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    BtcComponent,
    StartComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
