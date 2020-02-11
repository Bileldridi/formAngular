import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './home/test/test.component';
import { Test1Component } from './home/test1/test1.component';
import { Test2Component } from './home/test2/test2.component';
import { Test3Component } from './home/test3/test3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { PersonalDataComponent } from './personal-data/personal-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    PersonalDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
