import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';


import { MainModule } from "./main/main.module";
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { DetailsComponent } from './components/details/details.component';
import { UsersService } from './services/users.service';
import { AuthComponent } from './components/auth/auth.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    DetailsComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainModule,
    FormsModule,
  ],
  providers: [
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
