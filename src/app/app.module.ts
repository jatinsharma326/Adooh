import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MaterialModule } from './modules/material/material.module';
import { MatCardModule } from '@angular/material';
import { MiddleComponent } from './mid/middle/middle.component';
import { HeaderimageComponent } from './mid/headerimage/headerimage.component';
import { MergeModule } from './modules/merge.module';
import { Sect3Component } from './mid/sect3/sect3.component';
import { SectVideoComponent } from './mid/sect-video/sect-video.component';
import { OworkComponent } from './mid/owork/owork.component';
import { MidComponent } from './mid/mid.component';
import { DriverFormComponent } from './mid/driver-form/driver-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GmapsComponent } from './mid/gmaps/gmaps.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MiddleComponent,
    HeaderimageComponent,
    Sect3Component,
    SectVideoComponent,
    OworkComponent, MidComponent, DriverFormComponent, GmapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MaterialModule, MatCardModule, MergeModule
    , FormsModule, ReactiveFormsModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgKMu2sPS7QHsTlRTIb2a4Tb83unhrmqM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
