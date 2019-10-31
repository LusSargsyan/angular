import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { SearchComponent } from './search/search.component';

import { DatePipe } from '@angular/common';
import {AuthComponent} from './auth/auth.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {LoadingSpinnerComponent} from './shared/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      SearchComponent,
      AuthComponent,
      LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
  ],
  providers: [DatePipe, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
